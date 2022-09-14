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
describe('POST /cities', function() {
    it('Must respond with 201 status code', function(done) {
        request(app)
        .post('/cities')
        .send({
            city:"Tu vieja",
            country:"TuViejo",
            description: "queti",
            photo: "123.jpg",
            foundation:"1500", 
            population:"2" 
        })
        .expect(201, done)
    })


//npm install chai
//con chai adentro de ese test verificar alguna cosa concreta a traves de una comparacion
it('Must respond with the id', function(done) {
    request(app)
    .post('/cities')
    .send({
        city:"Tu vieja",
        country:"TuViejo",
        description: "queti",
        photo: "123.jpg",
        foundation:"1500", 
        population:"2" 
    })
    .then(response =>{    //cuando se haya completado la peticion
        assert.isString(response.body.id) //este id se manda de controlador cities
        done()
    })
    
  
})

    
})


describe('GET', ()=>{
    it('should get all cities',  (done)=> { //esta vez lo hacemos con arrow function
    request(app)
    .get('/cities')
    .expect(200, done)
    })
})

