const User = require("../models/User")
const crypto = require('crypto')//recurso propio de nodeJS para generar códigos aleatorios y unicos
const bcryptjs = require('bcryptjs') //recurso propio de nodeJS para hashear contraseñas.
const sendMail = require('./sendMail')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const validation = Joi.object({
    name: Joi.string()
        .required()
        .min(4)
        .max(20)
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LARGE',
        }),

    lastName: Joi.string()
        .required()
        .min(4)
        .max(20)
        .messages({
            'any.required': 'LASTNAME_REQUIRED',
            'string.empty': 'LASTNAME_REQUIRED',
            'string.min': 'LASTNAME_TOO_SHORT',
            'string.max': 'LASTNAME_TOO_LARGE',
        }),

    mail: Joi.string()
        .required()
        .email({ minDomainSegments: 2 })
        .messages({
            'any.required': 'EMAIL_REQUIRED',
            'string.empty': 'EMAIL_REQUIRED',
            'string.email': 'INVALID_EMAIL'
        }),

    password: Joi.string()
        .required()
        .min(8)
        .max(50)
        .alphanum()
        .messages({
            'any.required': 'PASS_REQUIRED',
            'string.empty': 'PASS_REQUIRED',
            'string.min': 'PASS_TOO_SHORT',
            'string.max': 'PASS_TOO_LARGE',
            'string.alphanum': 'PASS_ALPHANUMERIC_REQUIRED',
        }),

    photo: Joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'PHOTO_REQUIRED',
            'string.empty': 'PHOTO_REQUIRED',
            'string.uri': 'INVALID_URL'
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


    role: Joi.any()
        .required()
        .valid('user', 'admin')
        .messages({
            'any.required': 'ROLE_REQUIRED',
            'string.empty': 'ROLE_REQUIRED',
            'any.only': 'ROLE_NOT_ALLOWED'
        }),

    from: Joi.string()
        .required()
        .messages({
            'any.required': 'FROM_REQUIRED',
            'string.empty': 'FROM_REQUIRED'
        }),

    logged: Joi.boolean(),

    verified: Joi.boolean(),

    code: Joi.string(),
})

const userController = {
    newUser: async (req, res) => {
        //const {name, image, date, description, category, place, capacity, assistance, stimated, price} = req.body
        try {
            let result = await validation.validateAsync(req.body)
            let user = await new User(req.body).save()//req.body tiene que tener si o si todas las variables antes descriptas.
            res.status(201).json({
                message: 'user created',
                response: user._id,
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "coul't create User",
                success: false
            })
        }
    },


    readUsers: async (req, res) => {
        let query = {}
        let users
        if (req.query.user) {
            req.user = req.query.user
        }
        try {

            users = await User.find(query)
            if (users) {
                res.status(200).json({
                    message: "You get all users",
                    response: users,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Could't find users"
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

    read: async(req, res) => {
        const {id} = req.params
        try {
            let user = await User.findOne({_id:id})
            if(user){
                res.status(200).json({
                    message: "You get one user",
                     response: user,
                    success: true
                 })
            } else {
                res.status(404).json({
                    message: "could't find user",
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



    signUp: async (req, res) => {
        let {
            name,
            country,
            lastName,
            photo,
            mail,
            password,
            role, //tiene que venir del front para usar este metodo para ambos casos (user y admin).
            from //el from tiene que venir desde el front para avisarle al método desde donde se crea el usuario.
        } = req.body
        try {
            let user = await User.findOne({ mail })//busca que coincida el mail
            if (!user) {
                let logged = false
                let verified = false

                //code: clave unica de usuario o unique string
                let code = crypto //invoco el generador de codigos
                    .randomBytes(15) //le aplico el método para avisarle que tiene 15 digotos
                    .toString('hex') //le aplico el método para avisarle que tiene que ser hexa

                if (from === 'form') { //Si la data viene del formulario de registro
                    password = bcryptjs.hashSync(password, 10) //hashSync que requiere 2 parametros

                    user = await new User({ name, photo, mail, lastName, country, password: [password], role, from: [from], logged, verified, code }).save()

                    sendMail(mail, code)
                    //Hay que incorporar la función para el envio de mail de verificacion
                    res.status(201).json({
                        message: "user signed up from form",
                        success: true
                    })
                } else { //si viene desde redes sociales (cualquier red social)
                    password = bcryptjs.hashSync(password, 10) //hashSync que requiere 2 parametros
                    verified = true

                    user = await new User({ name, photo, mail, lastName, country, password: [password], role, from: [from], logged, verified, code }).save()

                    //No hace falta enviar el mail de verificacion.
                    res.status(201).json({
                        message: "user signed up from" + from,
                        success: true
                    })
                }
            } else { //si el usuario SI existe
                if (user.from.includes(from)) { //Si la propiedad from del usuario(que es un array) incluye el valor from 
                    //usert.from=['google','facebook'] incluye from='google
                    res.status(200).json({ //Tiene exito en buscar un usuario.
                        message: "User already exists",
                        success: false //porque no tiene exito en la creacion del usuario.
                    })
                } else { // ???> user.from = ['google','facebook'] incluye from'linkedin'
                    user.from.push(from) //vinculo la nueva forma de registro al usuario.                }
                    user.verified = true //el usuario ya tiene registros previos, significa que ya se verifico en algún momento.
                    //si ya se verifico en algún momento ==> me aseguro que esté veficado user.verified=true
                    user.pass.push(bcryptjs.hashSync(pass, 10))//Hasheo la nueva passw del usuario.
                    await user.save()
                    res.status(201).json({
                        message: "user signed up from" + from,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "could't sing up",
                success: false
            })
        }
    },

    verifyMail: async (req, res) => {
        const { code } = req.params
        let user = await User.findOne({ code: code })
        try {
            if (user) {
                user.verified = true //cambio la propiedad.
                await user.save() //guardo el cambio en la bse de datos.
                res.redirect('https://www.google.com')//cambiar por index o bienvenida, pagina de ej a redireccionar HOST FRONT
            } else {
                res.status(404).json({
                    message: "could't verify account",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: "could't verify account",
                success: false
            })
        }
    },

    signIn: async (req, res) => {
        const {
            mail,
            password
        } = req.body
        try {
            const user = await User.findOne({
                mail
            })
            if (!user) { //Si usuario no existe
                res.status(404).json({
                    success: false,
                    message: "User dosen't exist, please sign up."
                })
            } else if (user.verified) { //Si usuario existe y esta verificado
                const checkPass = user.password.filter(passwordElement => bcryptjs.compareSync(password, passwordElement))
                if (checkPass.length > 0) { //Contraseña coincide
                    user.logged = true
                    await user.save()
                    const loginUser = {
                        id: user._id,
                        name: user.name,
                        mail: user.mail,
                        role: user.role,
                        from: user.from,
                        photo: user.photo
                    }
                    const token = jwt.sign(
                        {
                            id: user._id,
                            role: user.role
                        }, //la data que quiero codificar
                        process.env.KEY_JWT, //la clave de validacion
                        { expiresIn: 60 * 60 * 24 } //el tiempo de expiracion en segundos
                    )
                    res.status(200).json({
                        success: true,
                        response: {
                            user: loginUser,
                            token: token
                        },
                        message: 'Welcome ' + user.name
                    })
                } else { //Contraseña no coincide
                    res.status(401).json({
                        success: false,
                        message: 'Username or password incorrect'
                    })
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Please, verify your email account and try again'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: 'Sign in ERROR, try again later'
            })
        }

    },

    signInToken:(req, res) => {
        if (req.user!==null) {            
            res.status(200).json({
                success: true,
                response: {
                    user: req.user
                },
                message: 'Welcome ' + req.user.name+'!'
            })
        } else {
            res.json({
                success:false,
                message:"sign in please!"}) 
        }
    },

    //findOneAndUpdate y cambiar logged de true a false.
    signOut: async (req, res) => {
        const { mail } = req.body

        try {
            const user = await User.findOne({ mail: mail })
            if (user) {
                user.logged = false
                await user.save()
                res.status(200).json({
                    success: true,
                    response: user.logged,
                    message: 'Good bye' + user.name
                })

            } else { //Si usuario no logged
                res.status(404).json({
                    success: false,
                    message: "User is not logged, please sign in."
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "error"
            })
        }
    }

}




module.exports = userController