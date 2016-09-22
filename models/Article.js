var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
	NYTTitle: {
		type:String
	},
	NYTDate: {
		type: String
	},
	NYTUrl: {
		type: String
	},
  NYTId: {
    type: String
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
