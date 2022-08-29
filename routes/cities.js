var express = require('express');
var router = express.Router();

//Traer el método con desestructuración.
const {create} = require('../controllers/cityController')//Traigo una propiedad, metodo del objeto.

//trae el método con el objeto entero
/*
const citiesController = require('../controllers/cityController')//Traigo TODO el objeto/controlador
const createController = citiesController.create
const readController = citiesController.read 
const updateController = citiesController.update
const destroyController = citiesController.destroy
*/

//router.motodo('la ruta', controlador)
router.post('/', create)

//localhost8000/events/

module.exports = router;