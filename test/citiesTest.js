//instalamos y requerimos supertest  npm install supertest --save-dev
const request = require('supertest')
const app = require('../server') //server.js

//npm install --save-dev mocha

//primer parametro metodo y ruta que queremos testear, segundo func callback
describe('POST /cities', function() {
    it('Must respond with 201 status code', function() {
        request(app)
        .post('/cities')
        .send({})
        .expect(201)
        .end(function(err,res){
            console.log(err)
        })
    })
})
