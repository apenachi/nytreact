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

mongoose.connect('mongodb://localhost/nytReactDB');
// mongod --dbpath /usr/local/lib/MongoDB/data/ --profile 1 --slowms 2000
// mongoose.connect('mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// app.get('/', function(req, res){
//   res.sendFile('./public');
// })

app.get('/api/', function(req, res) {
  console.log(' GET  /api/')
  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}, function(err, doc){
      if(err){
        console.log(err);
      }
      else {
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
    }
    else {
      res.send("Saved Article");
    }
  })
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
