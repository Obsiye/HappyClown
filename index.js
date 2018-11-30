'use strict'

var express = require('express');
var app = express();
var path = require('path');
var dataStore;
const AWS = require('aws-sdk');
const fs = require('fs');

app.use(express.static(path.join(__dirname)));
app.use("/stylesheets", express.static(__dirname));
app.use("/views", express.static(__dirname + '/views'));
app.use("/src", express.static(__dirname + '/src'));

var s3 = new AWS.S3();

// var params = {
//     Bucket: "happyclownjokes",
//     MaxKeys: 2
// };

var params = {Bucket: 'happyclownjokes', Key: 'data.json'};

s3.getObject(params, function (err, data) {
    if (err) { 
            console.log(err, err.stack);
 } // an error occurred
    else {
        dataStore = JSON.parse(JSON.stringify(data.Body));
    }
});

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


app.get('/', function (req, res) {
    // res.send(JSON.stringify(dataStore.jokes.toString()));
    res.sendFile(path.join(__dirname + '/views/happy_clown.html'));
});

app.get('/data', function (req, res) {
    res.send(dataStore);
    // res.sendFile(path.join(__dirname + '/views/happy_clown.html'));
});

app.listen(process.env.PORT || 8080);

