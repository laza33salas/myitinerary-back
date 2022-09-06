const request = require('supertest')
const app = require('../server')
const {assert} = require('chai')

describe('POST /cities', function(){
    it('Must respond with 201 status code', function(){
        request(app)
                .post('/cities')
                .send({
                    city: "Test",
                    description:"",
                    photo: "gttp://localhost:4000/images",
                    foundation:"1997",
                    population: "2000000"
                })
                .expect(201) 
    })

    it('Must respond with 400 status code', function(){
        request(app)
                .post('/cities')
                .send({})
                .expect(400)
    })
})