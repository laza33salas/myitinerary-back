const Itinerary = require("../models/Itinerary")

const itineraryController ={
    newItinerary: async(req, res) =>{
        //const {name, image, date, description, category, place, capacity, assistance, stimated, price} = req.body
        try{
            console.log(req.body)
           let itinerary = await new Itinerary(req.body).save()//req.body tiene que tener si o si todas las variables antes descriptas.
            res.status(201).json({
                message: 'itinerary created',
                response: itinerary._id,
                success: true
            }) 
        } catch(error) {
            res.status(400).json({
                message: "coul't create Itinerary",
                success: false
            })
        }
    },
    readItineraries: async(req, res) => {
        let query = {}
         let itineraries 
         if (req.query.city) {
             query.city = req.query.city
         }


         if(req.query.user){
            query.user = req.query.user
         }



         try {
            itineraries = await Itinerary.find(query)
            .populate('city', {city:1,})
            
            if(itineraries){
                     res.status(200).json({
                         message: "You get all itineraries",
                          response: itineraries,
                         success: true
                      })
                 }else{
                     res.status(404).json({
                         message:"Could't find itineraries"
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

     updateItinerary: async(req,res) =>{
        const {id} = req.params
        const itinerary = req.body
        let itineraryChange
        try{
            itineraryChange = await Itinerary.findOneAndUpdate({_id:id}, itinerary, {new:true})
            if(itineraryChange){
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
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    removeItinerary: async(req, res) => {
        const {id} = req.params
        try {
            let itinerary = await Itinerary.findOneAndDelete({_id:id})
            if(itinerary){
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
          } catch(error) {
                console.log(error)
                res.status(400).json({
                message: "error",
                success: false
            })
      }

    }
}

module.exports = itineraryController