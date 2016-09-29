var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
var github = require('./app/models/github');
var router = express.Router();
var request = require('request');

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res) {

   res.json({ message: 'hooray! welcome to our api!' });

});

app.use('/api', router);


app.listen(port);
console.log('Magic happens on port ' + port);
