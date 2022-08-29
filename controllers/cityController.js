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
    }
}

module.exports = eventController