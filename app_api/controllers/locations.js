var mongoose = require('mongoose');
var Loc = mongoose.model('Location');
var Tech = mongoose.model('Technology');

var sendJsonResponse = function(res,status,content){
  res.status(status);
  res.json(content);
};


//Get the 'home' page
module.exports.homelist = function (req,res,next){
  Loc
    .findOne({"_id": "5b9bff5e14fa7de5a113e765"})
    .exec(function(err,locations){
      if (!locations) {
        sendJsonResponse(res,404,{"message": "location not found"});
        return;
      } else if (err) {
        sendJsonResponse(res,404,err)
      }
      sendJsonResponse(res,200,locations)
  });
};
module.exports.onePost = function (req,res,next) {
  if (req.params && req.params.locationId) {
    Loc
      .findById(req.params.locationId)
      .exec(function(err,locations){
        if (!locations) {
          sendJsonResponse(res,404,{"message": "locationid not found"});
          return;
        } else if (err) {
          sendJsonResponse(res,404,err)
        }
        sendJsonResponse(res,200,locations)
    });
  } else {
    sendJsonResponse(res,404,{"message":"No locationid in request"});
  }
};

module.exports.techPost = function (req,res,next) {
  if (req.params && req.params.techId) {
    Tech
      .findById(req.params.techId)
      .exec(function(err,technologies) {
        if (!technologies) {
          sendJsonResponse(res,404,{"message": "techid not found"});
          return;
        } else if (err) {
          sendJsonResponse(res,404,err)
        }
        sendJsonResponse(res,200,technologies)
    });
  } else {
    sendJsonResponse(res,404,{"message":"No techid in request"});
  }
};
module.exports.techInfo = function (req,res){
  // Loc.create({
  //   title: req.body.title,
  //   cotent: req.body.content,
  //   mainPage:{
  //     title2:req.body.title2,
  //     content1:req.body.content1,
  //     content2:req.body.content2,
  //     content3:req.body.content3,
  //   }
  // },function (err,tech) {
  //     if (err) {
  //       sendJsonResponse(res,400,err);
  //     } else {
  //       sendJsonResponse(res,201,tech);
  //     }
  // });
};


module.exports.commentCreate = function (req,res) {
  // var locationId = req.params.locationId;
  // if (locationId) {
  //   Loc
  //     .findById(locationId)
  //     select('comments')
  //     .exec(function (err,tech) {
  //        if (err) {
  //          sendJsonResponse(res,400,err);
  //        } else {
  //           doAddReview(req,res,tech)
  //        }
  //     });
  // } else {
  //   sendJsonResponse(res,404,{"message": "Location not found"});
  // }
};

module.exports.doAddComment = function (req,res){
      if (!location) {
           sendJsonResponse(res,400,{
             "message": "location not found"
           });
     } else {
      tech.reviews.push({
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments
      });
      tech.save(function(err,tech) {
        var thisReview
        if (err) {
          sendJsonResponse(res,400,err);
        } else {
           thisReview = tech.reviews[tech.reviews.length-1];
           sendJsonResponse(res,200,thisReview);
        }
      });
    }
  };

module.exports.locationInfo = function (req,res,next){};
module.exports.techReadOne = function (req,res,next){};
module.exports.commentWrite = function (req,res,next){};
module.exports.commentDeleteOne = function (req,res,next){};
