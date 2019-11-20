var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: {type: String},
    author: {type: String},
    description: {type: String}
    
  });

module.exports = mongoose.model('Article', articleSchema);
