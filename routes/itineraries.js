var express = require('express');
var router = express.Router();

const{newItinerary, readItineraries, updateItinerary, removeItinerary} = require('../controllers/itinerary')

router.post('/', newItinerary)
router.get('/', readItineraries)
router.put('/:id', updateItinerary)
router.delete('/:id', removeItinerary)

module.exports = router;
