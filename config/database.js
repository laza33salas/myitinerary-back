const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_CONECTION, 
    {
        useUnifiedTopology: true, //habilita a mongo a controlar la db de mongo
        useNewUrlParser: true //itiliza el analizador de errores de mongoose en lugar de la de mongo
    }
        //primer parametro: lin de conecxion
        //segundo parametro: objeto con dos propiedades en true
)
    .then(()=>console.log('connected to database successfully'))//luego que se cumple la promesa le aviso al desarrollador que esta coenctado.
    .catch(error=>console.log(error))//Si no se pudo conectar consologueo el error.

    //una vez configurada la conexcion: requiero esta coneccion en app.js