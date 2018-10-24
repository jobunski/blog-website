var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations')
var ctrlOthers = require('../controllers/others')


// Location pages
router.get('/',ctrlLocations.homelist); //Homepage
router.get('/technology',ctrlLocations.techInfo);
router.get('/location/review/new',ctrlLocations.addReview);


//other pages
router.get('/about',ctrlOthers.about);

module.exports = router;
