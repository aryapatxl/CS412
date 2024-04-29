var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient({ host: 'localhost', port: 6379 });

client.on('error', function(err) {
  console.error('Error connecting to Redis:', err);
});

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


var axios = require('axios');
var redis = require('redis');
var client = redis.createClient();


router.post('/api', function(req, res) {
  var word = req.body.word;
  var key = word;

  client.get(key, function(err, reply) {
    if (reply) {
      res.json({ source: 'cache', data: JSON.parse(reply) });
    } else {
      var apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

      axios.get(apiURL)
        .then(function (response) {
          var apiResponse = response.data;
          console.log(apiResponse); 
          client.setex(key, 15, JSON.stringify(apiResponse));

          res.json({ source: 'api', data: apiResponse });
        });
    }
  });
});

module.exports = router;
