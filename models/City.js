const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    city:{type: String, required: true},
    country:{type: String, required: true},
    description: {type: String},
    photo: {type: String, required: true},
    foundation: {type: Date, required: true},
    population: {type: Number, required: true},
  
})


const City = mongoose.model(
    'cities',
    schema
    //nombre de la conexion
    //esquema de datos
)

module.exports = City; 