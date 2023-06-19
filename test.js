const app = require('./index')
const request = require('supertest')

describe('GET /', function () {
  it('responde com status 200', function (done) {
    request(app).get('/').expect(200, done)
  })

  it('responde com a mensagem "Hello, World!"', function (done) {
    request(app).get('/').expect('Hello, World!', done)
  })

  it('responde com os cabeçalhos de segurança apropriados', function (done) {
    request(app).get('/').expect('Content-Security-Policy', done)
  })
})

describe('GET /greeting/:name', function () {
  it('responde com status 200 e uma saudação personalizada', function (done) {
    request(app).get('/greeting/John').expect(200).expect('Hello, John!', done)
  })
})
