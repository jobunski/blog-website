var mongoose = require('mongoose');
var mainPageSchema = new mongoose.Schema({
  title2: String,
  content1: String,
  content2: String,
  content3: String,
});

// var reviewSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   comments:String,
//   createdon: {type: Date "default": Date.now}
// });

var techSchema = new mongoose.Schema({
 title: String,
 cotent: String,
 mainPage:[mainPageSchema],
 // review:[reviewSchema],

});

mongoose.model('Technology', techSchema);
