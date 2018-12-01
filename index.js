'use strict'

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
    Bucket: process.env.BUCKET_NAME,
    Key: process.env.BUCKET_KEY
};


s3.getObject(params, function (err, data) {
    if (err) { 
            console.log(err, err.stack);
    }
    else {
        dataStore = JSON.parse(data.Body);
        console.log('hello look here');
        console.log(dataStore.jokes);
    }
});

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/happy_clown.html'));
});

app.get('/data', function (req, res) {
    res.send(dataStore);
});

app.listen(process.env.PORT || 8080);

