var express = require('express');
var router = express.Router();

//Traer el método con desestructuración.
const {create,read,remove,readAll,update} = require('../controllers/cities')//Traigo una propiedad, metodo del objeto.



//router.motodo('la ruta', controlador)
router.post('/', create)
router.get('/:id', read)
router.get('/', readAll)
router.delete('/:id', remove)
router.patch('/:id', update)

//localhost8000/events/

module.exports = router;