require("dotenv").config()
const bcryptjs = require('bcryptjs')
const db = require('./config/database')//Importamos DB
const User = require('./models/User') //Importamos modelo




const dataUser= [
    {
        name: "Lazaro",
        lastName: "Salas",
        mail: "lazarocode@gmail.com", 
        password: [bcryptjs.hashSync("arrancaonoarranca", 10)],
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2Mos0vTYM9Gz19ssQlq6aqPN3uCXaSGzKvVZXRA4xFJYemgQOK1oOpBOmBgAx4_oeds&usqp=CAU",
        country: "Argentina",
        role: "admin",
        from: ['form'],
        logged: false,
        verified: true,
        code: "lazajnshgdkja"

    },

    {
        name: "Leo",
        lastName: "Medici",
        mail: "leomedici06@gmail.com", 
        password: [bcryptjs.hashSync("leonidas", 10)],
        photo:"https://media-exp1.licdn.com/dms/image/C5635AQHljT4VMVtFMA/profile-framedphoto-shrink_200_200/0/1599668950877?e=1663185600&v=beta&t=jDMNobWq9h0p7f3sI7nY3h2pHuZL5El8s8ZFhuK6TZg",
        country: "Argentina",
        role: "admin",
        from: ['form'],
        logged: false,
        verified: true,
        code: "leoooo654asd"

    },

    {
        name: "Naruto",
        lastName: "Uzumaki",
        mail: "serehokage@gmail.com", 
        password: [bcryptjs.hashSync("sasuke", 10)],
        photo:"https://i.ytimg.com/vi/hg2kn8wIDfE/hqdefault.jpg",
        country: "Konoha",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "uwuasdajshgg"

    },

    {
        name: "Enano",
        lastName: "DeBoqiota",
        mail: "bocareydecopas3nano@gmail.com", 
        password: [bcryptjs.hashSync("bokita", 10)],
        photo:"https://www.cronica.com.ar/__export/1628282194594/sites/cronica/img/2021/08/06/maxi_2_crop1628279776764.jpg_871115299.jpg",
        country: "laboca",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "bokitaa56as4d"

    },

    {
        name: "Cuthulhu",
        lastName: "Lovecraft",
        mail: "cuthulhu32.com", 
        password: [bcryptjs.hashSync("cohort32", 10)],
        photo:"https://static.wikia.nocookie.net/lovecraft/images/7/72/Lovecraft-cthulhu.jpg/revision/latest?cb=20140210145556&path-prefix=es",
        country: "Ocean",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "culloveasgjhd635"

    },

    {
        name: "Eren",
        lastName: "Yeager",
        mail: "tatakae@gmail.com", 
        password: [bcryptjs.hashSync("mikasa", 10)],
        photo:"https://animehunch.com/wp-content/uploads/2022/03/Eren-scream.jpg",
        country: "Argentina",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "kaera6s74de"

    },

    {
        name: "Lionel",
        lastName: "Messi",
        mail: "el10arglioarg@gmail.com", 
        password: [bcryptjs.hashSync("traemelacopa", 10)],
        photo:"https://i.ytimg.com/vi/oQ4_u_OqleA/mqdefault.jpg",
        country: "Argentina",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "10waeas1d0asd10"

    },

    {
        name: "Diego",
        lastName: "Maradona",
        mail: "d1eg0m@gmail.com", 
        password: [bcryptjs.hashSync("eeeeeee", 10)],
        photo:"https://www.elperiscopio.cl/wp-content/uploads/2018/06/diegopuesto-820x385.jpg",
        country: "Argentina",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "ee10e1e0e1a10ea1"

    },

    {
        name: "Duaa",
        lastName: "Lipa",
        mail: "dual1p40m@gmail.com", 
        password: [bcryptjs.hashSync("duatehagoelamor", 10)],
        photo:"https://lumiere-a.akamaihd.net/v1/images/dua_lipa_portada_5_bf1628a4.jpeg?region=443,0,1100,1100",
        country: "Argentina",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "ee10e1999910ea1"

    },

    {
        name: "Gato",
        lastName: "Cable",
        mail: "hatecable@gmail.com", 
        password: [bcryptjs.hashSync("pspsps", 10)],
        photo:"https://pbs.twimg.com/media/EWgGu_MXsAE24E7.jpg",
        country: "Chile",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "ee10epsps10ea1"

    },

    {
        name: "Dios",
        lastName: "SiDios",
        mail: "elDios@gmail.com", 
        password: [bcryptjs.hashSync("noquiero", 10)],
        photo:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Cima_da_Conegliano%2C_God_the_Father.jpg",
        country: "Argentina",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "esakjehEKJHe"

    },

    {
        name: "Perro",
        lastName: "Caraperro",
        mail: "eladrido@gmail.com", 
        password: [bcryptjs.hashSync("guagua", 10)],
        photo:"https://i.kym-cdn.com/photos/images/facebook/001/087/569/c2b.jpg",
        country: "Argentina",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "as5d5D7687d6"

    },

    {
        name: "pity",
        lastName: "Alvarez",
        mail: "elpityyy@gmail.com", 
        password: [bcryptjs.hashSync("ahrelocoo", 10)],
        photo:"https://www.elsol.com.ar/mrf4u/statics/i/ps/elsol-compress.s3-accelerate.amazonaws.com/files/1531400441656Pity%20alvarez.jpg?width=1200&enable=upscale",
        country: "Argentina",
        role: "user",
        from: ['form'],
        logged: false,
        verified: true,
        code: "as5dsape5D7687d6"

    }


]

dataUser.forEach(dato => { 
     User.create({
    
    name: dato.name,
    lastName: dato.lastName,
    mail: dato.mail,
    password: dato.password,
    photo: dato.photo,
    country: dato.country,
    role: dato.role,
    from: dato.from,
    logged: dato.logged,
    verified: dato.verified,
    code: dato.code

    })
});
   
   

