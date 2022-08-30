var express = require('express');
var router = express.Router();

//Traer el método con desestructuración.
const {create,read,remove} = require('../controllers/cityController')//Traigo una propiedad, metodo del objeto.



//router.motodo('la ruta', controlador)
router.post('/', create)
router.get('/:id', read)
//router.get('/:id', readAll)
router.delete('/:id', remove)

//localhost8000/events/

module.exports = router;