const City = require('../models/City')

const Joi = require ('joi')

const validation = Joi.object({
    city: Joi.string()
    .required()
    .min(4)
    .max(20)
    .messages({
        'any.required': 'NAME_REQUIRED',
        'string.empty': 'NAME_REQUIRED',
        'string.min': 'NAME_TOO_SHORT',
        'string.max': 'NAME_TOO_LARGE',
    }),

    country: Joi.string()
    .required()
    .min(4)
    .max(20)
    .messages({
             'any.required': 'COUNTRY_REQUIRED',
             'string.empty': 'COUNTRY_REQUIRED',
             'string.min': 'COUNTRY_TOO_SHORT',
             'string.max': 'COUNTRY_TOO_LARGE',
         }),

    photo: Joi.string()
    .required()
    .uri()
    .messages({
        'any.required': 'IMG_REQUIRED',
        'string.empty': 'IMG_REQUIRED',
        'string.uri':'INVALID_URL'
    }),

    description:Joi.string()
    .required()
    .min(20)
    .max(250)
    .messages({
             'any.required': 'DESCRPTION_REQUIRED',
             'string.empty': 'DESCRPTION_REQUIRED',
             'string.min': 'DESCRPTION_TOO_SHORT',
             'string.max': 'DESCRPTION_TOO_LARGE',
         }),

    population: Joi.number()
    .required()
    .messages({
        'any.required': 'POPULATION_REQUIRED',
    }),

    foundation: Joi.date()
    .required()
    .messages({
        'any.required': 'DATE_REQUIRED',
        'string.empty': 'DATE_REQUIRED',
        
    }),

})


const eventController ={
    create: async(req, res) =>{
        //const {name, image, date, description, category, place, capacity, assistance, stimated, price} = req.body
        try{
            //validacion
            let result = await validation.validateAsync(req.body)
           
           let city = await new City(req.body).save()//req.body tiene que tener si o si todas las variables antes descriptas.
            res.status(201).json({
                message: 'city created',
                response: city._id,
                success: true,
                id: city._id
            }) 
        } catch(error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    readAll: async(req, res) => {
        let query = {}
         let cities 
         if (req.query.city) {
             let regExp = new RegExp(`^${req.query.city}`, 'i') 
             query.city = regExp
         }
         try {
             cities = await City.find(query)
                 if(cities){
                     res.status(200).json({
                         message: "You get all cities",
                         response: cities,
                         success: true
                      })
                 }else{
                     res.status(404).json({
                         message:"Could't find cities"
                     })
                 }
 
             } 
              catch(error) {
                 console.log(error)
                 res.status(500).json({
                 message: "error",
                 success: false
             })
       }
     },


    read: async(req, res) => {
        const {id} = req.params
        try {
            let city = await City.findOne({_id:id})
            if(city){
                res.status(200).json({
                    message: "You get one city",
                     response: city,
                    success: true
                 })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                 })

            }
          } catch(error) {
                console.log(error)
                res.status(400).json({
                message: "error",
                success: false
            })
      }
    },

    

    remove: async(req, res) => {
        const {id} = req.params
        try {
            let city = await City.findOneAndDelete({_id:id})
            if(city){
                res.status(200).json({
                    message: "You delete one city",
                     response: city,
                    success: true
                 })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                 })

            }
          } catch(error) {
                console.log(error)
                res.status(400).json({
                message: "error",
                success: false
            })
      }

    },

    update: async(req,res) =>{
        const {id} = req.params
        const city = req.body
        let CityChange
        try{
            CityChange = await City.findOneAndUpdate({_id:id}, city, {new:true})
            if(CityChange){
                res.status(200).json({
                    message: "city modifed",
                    response: CityChange,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                 })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    }
    
}

module.exports = eventController