var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var db = require('./database')
var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder

//This route fetches all posting from the database and sends them to the client 
//later this function should receive the zip code of the authenticated user and display
//only relevant postings to the user 
app.get('/fetch', function(req, res) {
	console.log('retrieving form database...')
  	db.retrieveListings()
  	  .then((posts) => {
  	  	console.log('succesfully retrieved ' + posts.length + ' from database!')
  	  	res.status(201).send(posts)
  	  })
})


//This route receives a request upon submit from the form. The form holds all fields necesaary
//to make a new db entry. This route will take in the request and simply save to the db
app.post('/savepost', function(req, res) {
	console.log('saving to database...')
    db.saveListing(req)
      .then( (done) =>{
      	console.log('successfully save 1 item to the database!')
      	res.end()
      }
})

var _PORT = (process.env.PORT || 3000)
app.listen(_PORT, function() {
  console.log('listening on port 3000!');
});