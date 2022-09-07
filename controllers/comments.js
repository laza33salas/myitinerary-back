const Comment = require("../models/Comment")

const commentController={
    newComment: async(req, res) =>{
        //const {name, image, date, description, category, place, capacity, assistance, stimated, price} = req.body
        try{
            console.log(req.body)
           let comment = await new Comment(req.body).save()//req.body tiene que tener si o si todas las variables antes descriptas.
            res.status(201).json({
                message: 'comment created',
                success: true
            }) 
        } catch(error) {
            res.status(400).json({
                message: "coul't create Comment",
                success: false
            })
        }
    },
    readComments: async(req, res) => {
        let query = {}
         let comments 
         if (req.query.comment) {
             let regExp = new RegExp(`^${req.query.comment}`, 'i') 
             query.comment = regExp
         }
         try {
            comments = await Comment.find(query)
                .populate('comment')
                .populate('user',{name:1}, {photo:1})
                .populate('itinerary')
                 if(comments){
                     res.status(200).json({
                         message: "You get all comments",
                          response: comments,
                         success: true
                      })
                 }else{
                     res.status(404).json({
                         message:"Could't find comments"
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

module.exports = commentController