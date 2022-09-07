var express = require('express');
var router = express.Router();

const{newItinerary, readItineraries} = require('../controllers/itinerary')

router.post('/', newItinerary)
router.get('/', readItineraries)

module.exports = router;
