var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Article = require('./models/Article.js');

var app = express();
var PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// mongoose.connect('mongodb://localhost/craigslist-scraper');
var mongoUrl = process.env.MONGODB_URI || 'mongodb://heroku_qm0ktctw:fg2sc6bfdlde5921be3qef5op9@ds035776.mlab.com:35776/heroku_qm0ktctw'
console.log(mongoUrl);

var mongoDB = 'mongodb://' + mongoUrl + '/nytReactDB'

// mongoose.connect('mongodb://localhost/nytReactDB', function(err) {
mongoose.connect(mongoDB, function(err) {
  if (err) {
    console.log ('ERROR connecting to: ' + mongoDB + ' . ' + err);
  } else {
    console.log ('Succeeded connected to: ' + mongoDB);
  }
});
// mongoose.connect('mongodb://localhost/nytReactDB');
// mongod --dbpath /usr/local/lib/MongoDB/data/ --profile 1 --slowms 2000
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

app.get('/api/drop', function(req, res) {
  console.log('GET /api/drop');
  Article.remove({}, function(err) {
    if(err) {
      res.send('Could not remove Articles')
    } else {
      res.send('Articles Removed')
    }
  });
});

app.get('/api/', function(req, res) {
  console.log(' GET  /api/')
  Article.find({}, function(err, doc){
      if(err){
        console.log(err);
      } else {
        res.send(doc);
      }
    })
});

app.post('/api/', function(req, res){
  var newArticle = new Article(req.body.article);
  console.log('newArticle', newArticle);
  console.log(req.body.article)
  Article.create(newArticle, function(err){
    if(err){
      console.log(err);
    } else {
      res.send("Saved Article");
    }
  })
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
