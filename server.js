var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


var router = express.Router();

router.use(function(req, res, next) {
	console.log('something is happening');
	next();
});

router.get('/', function(req, res) {

	res.json({
		message: 'hooray! welcome to our api!'
	});

});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

var mongoose = require('mongoose');

var Car = require('./app/models/car.js');

mongoose.connect('mongodb://localhost/car_db'); // connect to our database

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("connected")
});


router.route('/cars')
	.post(function(req, res) {
		var car = new Car();


		car.name = req.body.name;


		car.save(function(err) {
			console.log(car.name)
			if (err)
				res.send(err);

			res.json({
				message: 'Car created!'
			});
		})
	})

.get(function(req, res) {
	Car.find(function(err, cars) {
		if (err)
			res.send(err)

		res.json(cars)
	})

});

router.route('/cars/:car_id')
	.get(function(req, res) {
		Car.findById(req.params.car_id, function(err, car) {
			if (err)
				res.send(err);
			res.json(car)
		})
	})
	.put(function(req, res) {
			Car.findById(req.params.car_id, function(err, car) {
					if (err)
						res.send(err)

					car.name = req.body.name;

					car.save(function(err) {
						if (err)
							res.send(err)
						res.json({
							message: car.name + " car updated"
						});
					});
        });
      })
	.delete(function(req, res) {
		Car.remove({
				_id: req.params.car_id
			}, function(err, car) {
				if (err)
					res.send(err);

				res.json({message: "deleted"});
		});
  });
