const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const User = require('../models/User')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_ID, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER} = process.env

const sendMail = async(mail, code) => {

    const client = new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
        client.setCredentials({
            refresh_token: process.env.GOOGLE_REFRESH
        })

        const accessToken = client.getAccessToken()

        const transport = nodemailer.createTransport({ //conf que requiere el mail para enviarse.
            service: 'gmail',
                auth: {
                    user: GOOGLE_USER, 
                    type: 'OAuth2',
                    clientId: GOOGLE_ID,
                    clientSecret: GOOGLE_SECRET,
                    refreshToken: GOOGLE_REFRESH,
                    accessToken: accessToken
                },
                tls: {//Transport Layer Security
                    rejectUnauthorized: false //para evitar que bloquee el antivirus
                }
        })

        const mailOptions = {
            from: GOOGLE_USER,
            to: mail,
            subject: 'Verify My Itinerary account',
            html: `
                <div>
                    <h1>Hola ${mail}</h1>
                    <a href='http://localhost:4000/auth/verify/${code}'>clik to verify!</a> 
                </div>
            ` //Codigo HTML puro que se va a renderizar en el cuerpo del mail.
            //en el cuerpo del html tengo que enviar un link a una direccion que verifique la clave unica de verificación.
            //localhost cambiar por back hosteado
        }

        await transport.sendMail(mailOptions, (error, response)=>{
            if(error){
                console.log(error)
            } else {
                console.log(response)
            }
        })

}

module.exports = sendMail