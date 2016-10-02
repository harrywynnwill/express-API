


#Express api



Learning Express.js

####Installation instructions
`$ git clone git@github.com:harrywynnwill/express-API.git`

`$ cd express-API`

`$ npm install`

`$ nodemon ./server.js localhost 8080`

###NOTES

#####1 Define node packages

```
{
    "name": "node-api",
    "main": "server.js",
    "dependencies": {
        "express": "~4.0.0",
        "mongoose": "~3.6.13",
        "body-parser": "~1.0.1",
        "mongodb": "^2.2.10",
    }
}
```

`express` is the Node framework

`mongoose` is the ORM to communicate with MongoDB

`body-parser` will let us post with HTTP request

`mongodb` is the databaseg

```
"devDependencies": {
  "nodemon": "^1.10.2"
},
```

`nodemon` allows us to make changes to the app while server is running.

#####2 Install the dependencies

`$ npm install`

#####3 setting up the server
see `server.js`

The base setup - pull in the various packages define our express app

Route setup - need an instance of router to define routes for the api

finally the app listens to the port then our app is live.

#####4 start the server
`nodemon ./server.js localhost 8080` start the server

visit the address in a browser.

#####5 setup account with modulus.io

setup an account with modulus.io and create a db

#####5b setup mongoDB

`$ brew install mongodb`

`$ mongod` starts mongodb


#####6 Create the model

create a file in a folder called models
in the file add the schema for the DB

#7 Route middleware

Add middleware to the server to show that a request has been sent to our API

`next()` makes sure we go to the next routes and dont stop here

#7 creating post request

`router.route('/model')` define the route
`.post(function(req, res){...` create an instance of the model in the function and set the request body to the key defined in the Schema

`var model = new Model();`
`model.name = req.body.name;`

then save the instance

`model.save(function(err){...`

add a function to return the error
`if (err) res.send(err);`

else return a message in json that the instance was saved

`res.json({ message: created});`

`});`

`});`
