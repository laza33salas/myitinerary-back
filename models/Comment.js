const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    comment:{type: mongoose.Types.ObjectId, ref:'comments', required: true},
    user:{type: mongoose.Types.ObjectId, ref:'users'},
    itinerary:{type: mongoose.Types.ObjectId, ref:'itineraries'}
})

const Comment = mongoose.model(
    'comments',
    schema
)

module.exports = Comment