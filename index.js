var express = require('express');
var app = express();
var path = require('path');
var dataStore;
const AWS = require('aws-sdk');

app.use(express.static(path.join(__dirname)));
app.use("/stylesheets", express.static(__dirname));
app.use("/views", express.static(__dirname + '/views'));
app.use("/src", express.static(__dirname + '/src'));

var s3 = new AWS.S3();

var params = {
    Bucket: "happyclownjokes",
    MaxKeys: 2
};

s3.listObjects(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
        dataStore = data;
    }          // successful response
});


app.get('/', function (req, res) {
    console.log(dataStore);
    response.write(dataStore);
    response.end();
    // res.sendFile(path.join(__dirname + '/views/happy_clown.html'));
});

app.listen(process.env.PORT || 8080);

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
