require("dotenv").config()
const db = require('./config/database')//Importamos DB
const User = require('./models/User') //Importamos modelo




const dataUser= [
    {
        name: "Lazaro",
        lastName: "Salas",
        mail: "lazarocode@gmail.com", 
        password: "arrancaonoarranca",
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2Mos0vTYM9Gz19ssQlq6aqPN3uCXaSGzKvVZXRA4xFJYemgQOK1oOpBOmBgAx4_oeds&usqp=CAU",
        country: "Argentina"

    },

    {
        name: "Leo",
        lastName: "Medici",
        mail: "leomedici06@gmail.com", 
        password: "leonidas",
        photo:"https://media-exp1.licdn.com/dms/image/C5635AQHljT4VMVtFMA/profile-framedphoto-shrink_200_200/0/1599668950877?e=1663185600&v=beta&t=jDMNobWq9h0p7f3sI7nY3h2pHuZL5El8s8ZFhuK6TZg",
        country: "Argentina"

    },

    {
        name: "Naruto",
        lastName: "Uzumaki",
        mail: "serehokage@gmail.com", 
        password: "sasuke",
        photo:"https://i.ytimg.com/vi/hg2kn8wIDfE/hqdefault.jpg",
        country: "Konoha"

    },


]

dataUser.forEach(dato => { 
     User.create({
        name: dato.name,
    lastName: dato.lastName,
    mail: dato.mail,
    password: dato.password,
    photo: dato.photo,
    country: dato.country,
    })
});
   
   

