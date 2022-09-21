var express = require('express');
var router = express.Router();

const{newItinerary, readItineraries, updateItinerary, removeItinerary, likeDislike} = require('../controllers/itinerary')

router.post('/', newItinerary)
router.get('/', readItineraries)
router.put('/:id', updateItinerary)
router.delete('/:id', removeItinerary)
//like con id???
router.patch('/like', likeDislike)


module.exports = router;
