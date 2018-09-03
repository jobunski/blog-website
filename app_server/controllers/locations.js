//Get the 'home' page
module.exports.homelist = function (req,res,next) {
res.render('location-list',{title: 'Bronx'});
};

//Get 'Location info' page
module.exports.locationInfo = function (req,res,next) {
res.render('tech',{title: 'Moving Technology'});
};

//Get the 'Add review page'
module.exports.addReview = function (req,res,next) {
res.render('index',{title: 'Add Review'});
};
