const passport = require('passport')
const passportJwt = require('passport-jwt')

const { KEY_JWT } = process.env
const User = require('../models/User')

passport.use(//Usar y configuar el pasaporte
    //analogia con migraciones:
    //si se cumplen todas las condificones del pasaporte
    //me deja avanzar hacia el modelo del controlador
    //es decir si
    //se sutentica correctamente un usuario comun => tiene permisos para likear o comentar
    //se autentica correctamente un usuario admin => tiene permisos para crear eventos o administradores
    new passportJwt.Strategy( //definimos una nueva estrategia
        {                         //estrategia de decodificacion
            jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(), //requiere
            //hace una extraccion/decodificacion del token a traves de un metodo
            //que le informa que viene DE HEADES como BEARER TOKEN
            secretOrKey: KEY_JWT //clave de validacion
        }, //la estrategia ROTORNA un objeto jwt_payload (con la data que se configura en el token)
        //los datos retornados del payload hay que enviarselos al controlador para que los pueda utilizar
        //en mi ejemplo se decodifica el id del usuario
        //ese id del usuario se envia al controlador para poder realizar las operaciones correspondientes
        //es decir se utiliza este ID del pasaporte en lugar del ID que enviabamos por body/params
        async (jwt_payload, done) => { //funcion asincrona que maneja como llega el dato decodificado al controlador
            //console.log(jwt_payload)
            try {
                let user = await User.findOne({ _ido: jwt_payload.id })
                //console.log(user)
                if (user) {
                    user = {
                        id: user._id,
                        name: user.name,
                        mail: user.mail,
                        role: user.role,
                        photo: user.photo
                    }
                    return done(null, user)//Si tiene exito con la autenticacion me envia al controlador, los datos del objeto user
                } else {
                    return done(null, false)
                }
            } catch (error) {
                console.log(error)
                return done(error, false)
            }
        }
    )
) //export???