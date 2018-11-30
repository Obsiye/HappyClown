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

s3.getObject(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
        dataStore = data;
    }
});

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


app.get('/', function (req, res) {
    res.header("Content-Type",'application/json');
    res.send(dataStore);
    // res.sendFile(path.join(__dirname + '/views/happy_clown.html'));
});

app.listen(process.env.PORT || 8080);

