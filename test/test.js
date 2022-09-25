//instalamos y requerimos supertest  npm install supertest --save-dev
const request = require('supertest')
//con supertest hacemos las peticiones para testear la api

const app = require('../server') //server.js

const {assert} = require('chai')


//con mocha hacemos todo el proceso de ejecucion de los test
//npm install --save-dev mocha 
//nos trae describe e it
//npx mocha (para ejecutar)

//primer parametro metodo y ruta que queremos testear, segundo func callback
// describe('POST /cities', function() {
//     it('Must respond with 201 status code', function(done) {
//         request(app)
//         .post('/cities')
//         .send({
//             city:"Tu vieja",
//             country:"TuViejo",
//             description: "queti",
//             photo: "123.jpg",
//             foundation:"1500", 
//             population:"2" 
//         })
//         .expect(201, done)
//     })


// npm install chai
// con chai adentro de ese test verificar alguna cosa concreta a traves de una comparacion
// it('Must respond with the id', function(done) {
//     request(app)
//     .post('/cities')
//     .send({
//         city:"Tu vieja",
//         country:"TuViejo",
//         description: "queti",
//         photo: "123.jpg",
//         foundation:"1500", 
//         population:"2" 
//     })
//     .then(response =>{    //cuando se haya completado la peticion
//         assert.isString(response.body.id) //este id se manda de controlador cities
//         done()
//     })
    
  
// })

    
// })


// describe('GET', ()=>{
//     it('should get all cities',  (done)=> { //esta vez lo hacemos con arrow function
//     request(app)
//     .get('/cities')
//     .expect(200, done)
//     })
// })


// describe("POST /users/signup", () => {
//         it("must respond with User already exists...", (done) => {
//             request(app)
//             .post("/users/signup")
//                 .send({
//                     name: "nameExample",
//                     lastName: "LastExample",
//                     photo: "http://pm1.narvii.com/6498/1a02c1a91d34a9a472841d4084095facab2d6fb4_00.jpg",
//                     country: "World",
//                     email: "bestpinkoctopus@notanexample.com",
//                     password: "h31d",
//                     role: "user",
//                     from: "example"
//                 })
//             .expect(200)
//             .end((err, res)=>{
//                 if (err) return done(err)
//                 console.log(res.body.message)
//                 return done()
//             })
//         })
//         it("must respond with Invalid email", (done) => {
//             request(app)
//             .post("/users/signup")
//                 .send({
//                     name: "nameExample",
//                     lastName: "LastExample",
//                     photo: "http://pm1.narvii.com/6498/1a02c1a91d34a9a472841d4084095facab2d6fb4_00.jpg",
//                     country: "World",
//                     email: "bestpinkoctopus.notanexample.com",
//                     password: "h31d",
//                     role: "user",
//                     from: "example"
//                 })
//             .expect(400)
//             .end((err, res)=>{
//                 if (err) return done(err)
//                 return done()
//             })
//         })
//         it("must respond with invalid password", (done) => {
//             request(app)
//             .post("/users/signup")
//                 .send({
//                     name: "nameExample",
//                     lastName: "LastExample",
//                     photo: "http://pm1.narvii.com/6498/1a02c1a91d34a9a472841d4084095facab2d6fb4_00.jpg",
//                     country: "World",
//                     email: "example@notanexample.com",
//                     password: "a",
//                     role: "user",
//                     from: "example"
//                 })
//             .expect(400)
//             .end((err, res)=>{
//                 if (err) return done(err)
//                 return done()
//             })
//         })
//     })

//--------------------------------------------------------------------------------------------------------------------
//PUT
let token
// describe("PUT /itineraries/:id", ()=>{
//     it("Must respond with You have updated an itinerary.", (done)=>{
//         request(app)
//             .put('/itineraries/6321e5609ed8e659adb4d69c')
//             .send({
//                 name: "Harry Potter",
//                 price: 700,
//             })
//             .set({"Authorization": "Bearer " + token})
//             .expect(200)
//             .then((res) => {
//                 assert.isObject(res.body.response)
//                 done()
//             })
//     })
// }),
//----------------------------------------------------------------------------------------------
// describe("POST /users/signin", ()=>{
//     it("Must respond with user signed in", (done)=>{
//         request(app)
//             .post('/users/signin')
//             .send({
//                 mail: "serehokage@gmail.com",
//                 password : "sasuke",
//                 from: "form"
//                 })
//             .expect(200)
//             .then((res) => {
//                 console.log(res.body.message)
//                 token = res.body.response.token
//                 done()
//             })
//     })

// })
//----------------------------------------------------------------------------------------
//GET

describe("GET /itineraries/users", ()=>{

    it("Must respond with all itineraries", (done)=>{
            request(app)
                .get('/itineraries')
                
                .expect(200)
                .end((err, res)=>{
                    if (err) return done(err)
                                return done()
                })
        }),

        
    it("Must respond with user", (done)=>{
        request(app)
            .get('/users/632b9b9507fd0a06a95b596d')
            .expect(200)
            .end((err, res)=>{
                if (err) return done(err)
                            return done()
            })
    })
})







        