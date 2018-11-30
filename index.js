var express = require('express');
var app = express();
var path = require('path');
const AWS = require('aws-sdk');
var dataStore;

app.use(express.static(path.join(__dirname)));
app.use("/stylesheets", express.static(__dirname));
app.use("/views", express.static(__dirname + '/views'));
app.use("/src", express.static(__dirname + '/src'));

var s3 = new AWS.S3();

var params = {
    Bucket: "happyclownjokes",
    MaxKeys: 2
};

AWS.config.update({
    accessKeyId: 'AKIAIS7IC77UFPGZ62WQ',
    secretAccessKey: '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'
});

s3.listObjects(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
        console.log(dataStore);
    }          // successful response
});


app.get('/', function (req, res) {
    console.log(dataStore.jokes);
    // res.write(dataStore);
    // res.end();
    res.sendFile(path.join(__dirname + '/views/happy_clown.html'));
});

app.listen(process.env.PORT || 8080);
