const City = require('../models/City')

const eventController ={
    create: async(req, res) =>{
        //const {name, image, date, description, category, place, capacity, assistance, stimated, price} = req.body
        try{
            await new Event(req.body).save()//req.body tiene que tener si o si todas las variables antes descriptas.
            res.status(201).json({
                message: 'city created',
                success: true
            })
        } catch(error) {
            res.status(400).json({
                message: "coul't create event",
                success: false
            })
        }
    },
    read: async(req, res) => {
        const {id} = req.params
        try {
            let city = await Event.findOne({_id:id})
            if(city){
                res.status(200).json({
                    message: "You get one city",
                     response: city,
                    success: true
                 })
            } else {
                res.status(404).json({
                    message: "could't find event",
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
    }
}

module.exports = eventController