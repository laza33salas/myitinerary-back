require("dotenv").config()
const db = require('./config/database')//Importamos DB
const Itinerary = require('./models/User') //Importamos modelo




const dataUser= [
    {
        name: "Excursion to Washington D.C.",
        user: "Salas",
        city: "New York", 
        price: 500,
        likes:[],
        tags: [],
        duration: 2

    },

    {
        name: "Harry Potter Tour at Warner Studios",
        user: "Medici",
        city: "London", 
        price: 500,
        likes:[],
        tags: [],
        duration: 5

    },

    {
        name: "Guided tour of the Vatican Museums and Sistine Chapel",
        user: "Igna",
        city: "Rome", 
        price: 200,
        likes:[],
        tags: [],
        duration: 9

    },

    {
        name: "Private tour of Hong Kong Island with a guide in Spanish",
        user: "Pablo",
        city: "Hong Kong", 
        price: 700,
        likes:[],
        tags: [],
        duration: 2

    },

    {
        name: "Symphony of Lights Cruise by Traditional Boat",
        user: "Marco",
        city: "Hong Kong", 
        price: 900,
        likes:[],
        tags: [],
        duration: 3

    },

    {
        name: "Full tour of Dubai",
        user: "Elena",
        city: "Dubai", 
        price: 2000,
        likes:[],
        tags: [],
        duration: 2

    },

    {
        name: "Helicopter ride over Dubai",
        user: "Nano",
        city: "Dubai", 
        price: 1500,
        likes:[],
        tags: [],
        duration: 3

    },

    {
        name: "Taman Negara Jungle Tour",
        user: "Elvio",
        city: "Dubai", 
        price: 38,
        likes:[],
        tags: [],
        duration: 2

    },

    {
        name: "Excursion to the Cameron Highlands",
        user: "Leen",
        city: "Dubai", 
        price: 139,
        likes:[],
        tags: [],
        duration: 3

    },

    {
        name: "Admission to Gardens by the Bay",
        user: "Leo",
        city: "Singapore", 
        price: 500,
        likes:[],
        tags: [],
        duration: 1
    
    },
    {
        name: "Tour from the airport",
        user: "Leo",
        city: "Singapore", 
        price: 100,
        likes:[],
        tags: [],
        duration: 2
    },
    {
        name: "Singapore sightseeing bus",
        user: "Juan",
        city: "Singapore", 
        price: 50,
        likes:[],
        tags: [],
        duration: 3
    },

    {
        name: "Guided tour of Macau",
        user: "Andre",
        city: "Macau", 
        price: 505,
        likes:[],
        tags: [],
        duration: 5
    }
    ,
    {
        name: "Lunch at the revolving restaurant of the Macau Tower",
        user: "Jose",
        city: "Macau", 
        price: 250,
        likes:[],
        tags: [],
        duration: 2
    }
    ,
    {
        name: "GTour on bike around Macao",
        user: "Tuti",
        city: "Macau", 
        price: 45,
        likes:[],
        tags: [],
        duration: 5
    },

    {
        name: "Market on the tracks, floating market and ruins of Ayutthaya",
        user: "Duko",
        city: "Bangkok", 
        price: 505,
        likes:[],
        tags: [],
        duration: 2
    },
    {
        name: "Private tour from Bangkok",
        user: "Cthulhu",
        city: "Bangkok", 
        price: 250,
        likes:[],
        tags: [],
        duration: 3
    },
    {
        name: "Ayutthaya tour",
        user: "Gengar",
        city: "Bangkok", 
        price: 90,
        likes:[],
        tags: [],
        duration: 5
    }

    
    


]

dataUser.forEach(dato => { 
     Itinerary.create({
        name: dato.name,
    user: dato.user,
    city: dato.city,
    price: dato.price,
    likes: dato.likes,
    tags: dato.tags,
    duration: dato.duration
    })
});
   
   
