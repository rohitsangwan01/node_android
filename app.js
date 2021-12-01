var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Your Node Backend on Android is working fine!');
});

app.listen(3000, function () {
  console.log('Node Server Started on Port 3000!');
});
