var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { string: 'Hello Friends' });
});

router.post('/', function (req, res) {
  var str = req.body.str;
  res.render('index', { string: str, length: str.length });
});

router.get('/names/:name', function (req, res) {
  var name = req.params.name;
  res.render('index', { string: name, length: name.length });
});

module.exports = router;