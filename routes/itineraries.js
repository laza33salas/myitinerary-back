var express = require('express');
var router = express.Router();
let passport = require('../config/passport')


const{newItinerary, readItineraries, updateItinerary, removeItinerary, like} = require('../controllers/itinerary')

//router.post('/', newItinerary)
router.get('/', readItineraries)
router.put('/:id', updateItinerary)
router.delete('/:id', removeItinerary)
router.post('/', passport.authenticate('jwt', {session:false}), newItinerary)
router.put('/like/:id', passport.authenticate('jwt', {session:false}), like)


module.exports = router;
