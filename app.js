// app.js
var express = require('express');
var path = require('path');
var app = express();
var ps3 = require('/Users/arya/hw2-cs412/ps3.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/ps3', ps3);

app.set('view engine', 'pug');
app.set('views', __dirname);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 