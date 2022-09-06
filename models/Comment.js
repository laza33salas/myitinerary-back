const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    comment:{type: String, required: true},
    user:{type: String, required: false},
    itinerary:{type: String, required: false}
})

const Comment = mongoose.model(
    'comments',
    schema
)

module.exports = Comment