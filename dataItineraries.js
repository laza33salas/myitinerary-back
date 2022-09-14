require("dotenv").config()
const db = require('./config/database')//Importamos DB
const Itinerary = require('./models/Itinerary') //Importamos modelo




const dataUser= [
    {
        name: "Excursion to Washington D.C.",
        user: "631f454be01437a9620c315a",
        city: "630f859926ae40f0802df990", 
        price: 500,
        likes:[5],
        tags: ["#piola", "#aguante argentina"],
        duration: 2

    },

    {
        name: "Harry Potter Tour at Warner Studios",
        user: "631f454be01437a9620c315b",
        city: "630f9506cf288787d91694df", 
        price: 500,
        likes:[10],
        tags: ["#aguante argentina", "#chavo"],
        duration: 5

    },

    {
        name: "Guided tour of the Vatican Museums and Sistine Chapel",
        user: "631f454be01437a9620c315a",
        city: "630f9506cf288787d91694e3", 
        price: 200,
        likes:[74],
        tags: ["#ArgentinaTeAmo"],
        duration: 9

    },

    {
        name: "Private tour of Hong Kong Island with a guide in Spanish",
        user: "631f454be01437a9620c315b",
        city: "630f859926ae40f0802df98a", 
        price: 700,
        likes:[6],
        tags: ["#CampeonesDelMundo"],
        duration: 2

    },

    {
        name: "Symphony of Lights Cruise by Traditional Boat",
        user: "631f454be01437a9620c315a",
        city: "630f859926ae40f0802df98a", 
        price: 900,
        likes:[3],
        tags: ["#TraemeLaCopaMessi"],
        duration: 3

    },

    {
        name: "Full tour of Dubai",
        user: "631f454be01437a9620c315b",
        city: "630f9506cf288787d91694e7", 
        price: 2000,
        likes:[3],
        tags: ["#ElDiegooooooooo"],
        duration: 2

    },

    {
        name: "Helicopter ride over Dubai",
        user: "631f454be01437a9620c315a",
        city: "630f9506cf288787d91694e7", 
        price: 1500,
        likes:[56],
        tags: ["#teHice"],
        duration: 3

    },

    {
        name: "Taman Negara Jungle Tour",
        user: "631f454be01437a9620c315b",
        city: "630f9506cf288787d91694e4", 
        price: 38,
        likes:[33],
        tags: ["#bienYvos?"],
        duration: 2

    },

    {
        name: "Excursion to the Cameron Highlands",
        user: "631f454be01437a9620c315b",
        city: "630f9506cf288787d91694e4", 
        price: 139,
        likes:[32],
        tags: ["#BuenDiaa"],
        duration: 3

    },

    {
        name: "Admission to Gardens by the Bay",
        user: "631f454be01437a9620c315b",
        city: "630f9506cf288787d91694de", 
        price: 500,
        likes:[22],
        tags: ["#Sprint4", "#te", "#Cocinamos"],
        duration: 1
    
    },
    {
        name: "Tour from the airport",
        user: "631f454be01437a9620c315b",
        city: "630f9506cf288787d91694de", 
        price: 100,
        likes:[12],
        tags: ["#River"],
        duration: 2
    },
    {
        name: "Singapore sightseeing bus",
        user: "631f454be01437a9620c315c",
        city: "630f9506cf288787d91694de", 
        price: 50,
        likes:[41],
        tags: ["#TengoMiedo"],
        duration: 3
    },

    {
        name: "Guided tour of Macau",
        user: "631f454be01437a9620c315a",
        city: "630f9506cf288787d91694e1", 
        price: 505,
        likes:[22],
        tags: ["#Arre"],
        duration: 5
    }
    ,
    {
        name: "Lunch at the revolving restaurant of the Macau Tower",
        user: "631f454be01437a9620c315c",
        city: "630f9506cf288787d91694e1", 
        price: 250,
        likes:[36],
        tags: ["#6x6"],
        duration: 2
    }
    ,
    {
        name: "GTour on bike around Macao",
        user: "631f454be01437a9620c315c",
        city: "630f9506cf288787d91694e1", 
        price: 45,
        likes:[1],
        tags: ["#SopaDoMacao"],
        duration: 5
    },

    {
        name: "Market on the tracks, floating market and ruins of Ayutthaya",
        user: "631f454be01437a9620c315c",
        city: "630f9506cf288787d91694dd", 
        price: 505,
        likes:[14],
        tags: ["#Columna", "#Neymar"],
        duration: 2
    },
    {
        name: "Private tour from Bangkok",
        user: "631f454be01437a9620c315c",
        city: "630f9506cf288787d91694dd", 
        price: 250,
        likes:[2],
        tags: ["#Chile", "#Afori"],
        duration: 3
    },
    {
        name: "Ayutthaya tour",
        user: "631f454be01437a9620c315c",
        city: "630f9506cf288787d91694dd", 
        price: 90,
        likes:[1],
        tags: ["#yaweon"],
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
   
   
