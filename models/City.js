const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    image: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    place: {type: String, required: true},
    capacity: {type: Number, required: true},
    assistance: {type: Number, required: true},
    stimated: {type: Number, required: true},
    price: {type: Number, required: true}

})


const City = mongoose.model(
    'cities',
    schema
    //nombre de la conexion
    //esquema de datos
)

module.exports = City;