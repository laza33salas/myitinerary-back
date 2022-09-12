const Activity = require("../models/Activity")

const activityController={
    newActivity: async(req, res) =>{
        //const {name, image, date, description, category, place, capacity, assistance, stimated, price} = req.body
        try{
            console.log(req.body)
           let activity = await new Activity(req.body).save()//req.body tiene que tener si o si todas las variables antes descriptas.
            res.status(201).json({
                message: 'activity created',
                success: true
            }) 
        } catch(error) {
            res.status(400).json({
                message: "coul't create activity",
                success: false
            })
        }
    },
    readActivities: async(req, res) => {
        let query = {}
         let activities 
         if (req.query.itinerary) {
             query.itinerary = req.query.itinerary
         }
         try {
            activities = await Activity.find(query)
            
            if(activities){
                     res.status(200).json({
                         message: "You get all activities",
                          response: activities,
                         success: true
                      })
                 }else{
                     res.status(404).json({
                         message:"Could't find activities"
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
     }
}

module.exports = activityController