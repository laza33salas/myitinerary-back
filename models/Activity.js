const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    photo:{type: String, required: true},
    itinerary:{type: mongoose.Types.ObjectId, ref:'itineraries'}
})

const Activity = mongoose.model(
    'activities',
    schema
)

module.exports = Activity