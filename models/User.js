const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type: String, required: true},

    lastName:{type: String, required: true},

    mail:{type: String, required: true},

    password:[{type: String, required: true}], //Array para que se guarden contraseñas.
    
    photo:{type: String, required: true},

    country:{type: String, required: true},

    role:{type: String, required: true},

    from: [{type: String, required:true}], //array con todas las formas en las que se registro el usuario.
    
    logged: {type: Boolean, required: true},//por defecto en false, y cuando se loguea sera true.
    
    verified: {type: Boolean,required: true},//por defecto en false, y cuando se verifique sera true.
    
    code: {type: String, required: true} //codigo de verificacion del usuario que se "enviara" por mail.
})

const User = mongoose.model(
    'users',
    schema
)

module.exports = User