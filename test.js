const app = require('./index')
const request = require('supertest')

describe('GET /', function () {
  it('responde com status 200', function (done) {
    request(app).get('/').expect(200, done)
  })

  it('responde com a mensagem "Hello, World!"', function (done) {
    request(app).get('/').expect('Hello, World!', done)
  })
})
