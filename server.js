var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


var github = require('./app/models/github');


var router = express.Router();

router.use(function(req, res, next){
  console.log('something is happening');
  next();
})

router.get('/', function(req, res) {

  res.json({ message: 'hooray! welcome to our api!' });

});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

var mongoose = require('mongoose');

var Car = require('./app/models/car');

mongoose.connect('mongodb://localhost:27017/db_name'); // connect to our database

router.route('/cars')
  .post(function(req, res){
    var car = new Car();
    car.name =  req.body.name;

    car.save(function(err){
      if (err)
        res.send(err);

        res.json({message: 'Car created!'});
    })
  });
