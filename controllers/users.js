const User = require("../models/User")
const crypto = require('crypto')//recurso propio de nodeJS para generar códigos aleatorios y unicos
const bcryptjs = require('bcryptjs') //recurso propio de nodeJS para hashear contraseñas.
const { response } = require('express')
const sendMail = require('./sendMail')

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
             let regExp = new RegExp(`^${req.query.user}`, 'i') 
             query.user = regExp
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
     },
     signUp: async(req,red) => {
        const {
            name,
            photo,
            mail,
            password,
            role, //tiene que venir del front para usar este metodo para ambos casos (user y admin).
            from //el from tiene que venir desde el front para avisarle al método desde donde se crea el usuario.
        } = req.body
        try{
            let user = await User.findOne({mail})//busca que coincida el mail
            if(!user){
                let logged = false
                let verified = false

                 //code: clave unica de usuario o unique string
                let code = crypto //invoco el generador de codigos
                    .randomBytes(15) //le aplico el método para avisarle que tiene 15 digotos
                    .toString('hex') //le aplico el método para avisarle que tiene que ser hexa
        
                if(from==='form'){ //Si la data viene del formulario de registro
                    pass = bcryptjs.hashSync(password,10) //hashSync que requiere 2 parametros
                    user = await new User({name, photo, mail, password:[password], role, from:[from], logged, verified, code}).save()
                    sendMail(mail,code)
                    //Hay que incorporar la función para el envio de mail de verificacion
                    res.status(201).json({
                        message: "user signed up from form",
                        success: true
                    })
                } else { //si viene desde redes sociales (cualquier red social)
                    pass = bcryptjs.hashSync(password,10) //hashSync que requiere 2 parametros
                    verified = true
                    user = await new User({name, photo, mail, password:[password], role, from:[from], logged, verified, code}).save()
                    //No hace falta enviar el mail de verificacion.
                    res.status(201).json({
                        message: "user signed up from"+from,
                        success: true
                    })
                }
            } else { //si el usuario SI existe
                if(user.from.includes(from)){ //Si la propiedad from del usuario(que es un array) incluye el valor from 
                                            //usert.from=['google','facebook'] incluye from='google
                    res.status(200).json({ //Tiene exito en buscar un usuario.
                        message: "User already exists",
                        success: false //porque no tiene exito en la creacion del usuario.
                    })
                } else { // ???> user.from = ['google','facebook'] incluye from'linkedin'
                    user.from.push(from) //vinculo la nueva forma de registro al usuario.                }
                    user.verified = true //el usuario ya tiene registros previos, significa que ya se verifico en algún momento.
                    //si ya se verifico en algún momento ==> me aseguro que esté veficado user.verified=true
                    user.pass.push(bcryptjs.hashSync(pass,10))//Hasheo la nueva passw del usuario.
                    await user.save() 
                    res.status(201).json({
                        message: "user signed up from"+from,
                        success: true
                    })
                }
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "could't sing up",
                success: false
            })
        }
    },

 verifyMail:async() => {},

    signIn: async() => {},

    signOut:async() => {}//findOneAndUpdate y cambiar logged de true a false.
}

module.exports = userController