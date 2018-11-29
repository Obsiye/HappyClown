var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/stylesheets", express.static(__dirname));
app.use("/views", express.static(__dirname + '/views'));
app.use("/src", express.static(__dirname + '/src'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/'));
});

app.listen(process.env.PORT || 8080);
