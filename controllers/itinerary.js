const Itinerary = require("../models/Itinerary")
const Joi = require('joi')
const validation = Joi.object({
    "name": Joi.string()
        .required()
        .min(4)
        .max(50)
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LARGE',
        }),

    "price": Joi.number()
        .required()
        .min(0)
        .max(2000)
        .messages({
            'number.base': 'INVALID_PRICE',
            'any.required': 'PRICE_REQUIRED',
            'number.empty': 'PRICE_REQUIRED',
            'number.min': 'INVALID_PRICE',
            'number.max': 'PRICE_TOO_MUCH',
        }),

    "duration": Joi.number()
        .required()
        .min(0)
        .max(24)
        .messages({
            'number.base': 'INVALID_DURATION',
            'any.required': 'DURATION_REQUIRED',
            'number.empty': 'DURATION_REQUIRED',
            'number.min': 'INVALID_DURATION',
            'number.max': 'DURATION_TOO_MUCH',
        }),

    "likes": Joi.array()
        .required()
        .messages({
            'any.required': 'LIKES_REQUIRED'
        }),

    "tags": Joi.array()
        .required()
        .messages({
            'any.required': 'TAGS_REQUIRED',

        }),

    "user": Joi.string()
        .required()
        .messages({
            'any.required': 'USER_REQUIRED',
            'string.empty': 'USER_REQUIRED',
        }),

    "city": Joi.string()
        .required()
        .min(4)
        .max(20)
        .messages({
            'any.required': 'CITY_REQUIRED',
            'string.empty': 'CITY_REQUIRED',
        }),
})


const itineraryController = {
    newItinerary: async (req, res) => {
        //const {name, image, date, description, category, place, capacity, assistance, stimated, price} = req.body
        try {
            await validation.validateAsync(req.body, { abortEarly: false })
            let itinerary = await new Itinerary(req.body).save()//req.body tiene que tener si o si todas las variables antes descriptas.
            res.status(201).json({
                message: 'itinerary created',
                response: itinerary._id,
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "coul't create Itinerary",
                success: false
            })
        }
    },
    readItineraries: async (req, res) => {
        let query = {}
        let itineraries
        if (req.query.city) {
            query.city = req.query.city
        }
        if (req.query.user) {
            query.user = req.query.user
        }
        try {
            itineraries = await Itinerary.find(query)
                .populate('city', { city: 1, })
            if (itineraries) {
                res.status(200).json({
                    message: "You get all itineraries",
                    response: itineraries,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Could't find itineraries"
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(500).json({
                message: "error",
                success: false
            })
        }
    },

    updateItinerary: async (req, res) => {
        const { id } = req.params
        const itinerary = req.body
        let itineraryChange
        try {
            itineraryChange = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
            if (itineraryChange) {
                res.status(200).json({
                    message: "itinerary modifed",
                    response: itineraryChange,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "could't find itinerary",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    removeItinerary: async (req, res) => {
        const { id } = req.params
        try {
            let itinerary = await Itinerary.findOneAndDelete({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    message: "You delete one itinerary",
                    response: itinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "could't find itinerary",
                    success: false
                })

            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        } nt

    },

    like: async (req, res) => {
        let { id } = req.params
        let userId = req.user.id
        try {
            let itinerary = await Itinerary.findOne({ _id: id })
            if (itinerary.likes.includes(userId)) { //Estaba el id dentro del array de likes
                itinerary.likes.pull(userId) //Dislike
                await itinerary.save()
                res.status(200).json({
                    message: "Itinerary disliked",
                    success: true
                })
            } else { //No estaba el id dentro del array de likes
                itinerary.likes.push(userId) //Like
                await itinerary.save()
                res.status(200).json({
                    message: "itinerary liked",
                    success: true
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error please logIn",
                success: false
            })
        }

    },
    //logica del controlador 
    //si el usuario quiero likear
    //agregar id del usuario al array de like
    //si el usuario quiere quitar el like
    //sacar el array el id del usuario
    likeDislike: async(req, res) => {
        //id del usuario que va a dar/quitar like
        //desesctructuro de la request el objeto user configurado en passport
        let { id } = req.user
        //itinerario que se quiere dar/quitar like 
        //desestructuro el body /mas abajo esta el ejemplo con params)
        let { itineraryId } = req.body
        try {
            let itinerary = Event.findOne({_id:itineraryId})
            //si encuentra el evento: armo la logica de likes
            if (itinerary && itinerary.likes.includes(id)) {
                itinerary.likes.pull(id)
                await itinerary.save()
                res.status(200).json({
                    message: "Itinerary disliked",
                    success: true
                })
            } else if (!itinerary.likes.includes(id)){
                itinerary.likes.push(id)
                await itinerary.save()
                res.status(200).json({
                    message: "Itinerary liked",
                    success: true
            })
        } else {
            res.status(404).json({
                message: "Itinerary not found",
                success: false
            })
        }
            //si no lo encuentro retorno un json
        } catch(error) {
            console.log(error)
            res.status(400).json({
            message: "error",
            success: false
        })
    }
    },
}

module.exports = itineraryController