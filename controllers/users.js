const User = require("../models/User")

const userController ={
    newUser: async(req, res) =>{
        //const {name, image, date, description, category, place, capacity, assistance, stimated, price} = req.body
        try{
            console.log(req.body)
           let user = await new User(req.body).save()//req.body tiene que tener si o si todas las variables antes descriptas.
            res.status(201).json({
                message: 'user created',
                response: user._id,
                success: true
            }) 
        } catch(error) {
            res.status(400).json({
                message: "coul't create User",
                success: false
            })
        }  
    },
    readUsers: async(req, res) => {
        let query = {}
         let users 
         if (req.query.user) {
            req.user = req.query.user
         }
         try {

             users = await User.find(query)
                 if(users){
                     res.status(200).json({
                         message: "You get all users",
                          response: users,
                         success: true
                      })
                 }else{
                     res.status(404).json({
                         message:"Could't find users"
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

module.exports = userController