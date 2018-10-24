var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations')
var ctrlOthers = require('../controllers/others')


// Location pages
router.get('/home',ctrlLocations.homelist); //Homepage
router.get('/home/:locationId',ctrlLocations.oneArticle); //Homepage
router.get('/technology',ctrlLocations.techInfo);
router.get('/technology/:techId',ctrlLocations.techPost);
router.get('/location/review/new',ctrlLocations.addReview);

//other pages
router.get('/about',ctrlOthers.about);

module.exports = router;
