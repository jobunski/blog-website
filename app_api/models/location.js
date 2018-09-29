var mongoose = require('mongoose');
var post1Schema = new mongoose.Schema({
  title: String,
  content: String,
});

var post2Schema = new mongoose.Schema({
  title: String,
  content: String,
});

var locationSchema = new mongoose.Schema({
  post1:[post1Schema],
 post2:[post2Schema],

});

mongoose.model('Location',locationSchema);
