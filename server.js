var express = require('express');
var app = express();

var port = process.env.PORT || 8080;


var github = require('./app/models/github');


var router = express.Router();
var options = {
  url: "https://api.github.com/users/harrywynnwill",
  headers: {
    'User-Agent': 'request'
  }
};



var request = require('request');




router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

function getGitHub() {

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return body;
      console.log(body)
    }
  })
};


router.get('/', function(req, res) {





});

app.use('/api', router);


app.listen(port);
console.log('Magic happens on port ' + port);



function _handleResponseFromApi (response) {
  return response.data;
}
