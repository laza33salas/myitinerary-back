require("dotenv").config()
const db = require('./config/database')//Importamos DB
const Activity = require('./models/Activity') //Importamos modelo

const dataActivities = [
    {
        name: "Views from Victoria Peak",
        photo: "https://cdn2.civitatis.com/hong-kong/hong-kong/galeria/pico-victoria.jpg",
        itinerary: "6321e5609ed8e659adb4d69e",
    },

    {
        name: "Panoramic of Hong Kong",
        photo: "https://cdn2.civitatis.com/hong-kong/hong-kong/galeria/panoramica-rascacielos-hong-kong.jpg",
        itinerary: "6321e5609ed8e659adb4d69e",
    },

    {
        name: "Touring Aberdeen Bay",
        photo: "https://cdn2.civitatis.com/hong-kong/hong-kong/galeria/bahia-aberdeen.jpg",
        itinerary: "6321e5609ed8e659adb4d69e",
    },


]