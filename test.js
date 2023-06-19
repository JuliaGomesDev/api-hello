const app = require('./index')
const request = require('supertest')
const assert = require('assert')

describe('GET /', function () {
  it('responde com status 200', function (done) {
    request(app).get('/').expect(200, done)
  })

  it('responde com a mensagem "Hello, World!"', function (done) {
    request(app).get('/').expect('Hello, World!', done)
  })
})

describe('GET /greeting/:name', function () {
  it('responde com status 200 e uma saudação personalizada', function (done) {
    request(app).get('/greeting/John').expect(200).expect('Hello, John!', done)
  })
})

describe('Teste de segurança para evitar injeção de código', function () {
  it('Não deve executar código injetado', function (done) {
    const injectedCode = '<script>alert("Vulnerabilidade!");</script>'

    request(app)
      .get(`/?name=${encodeURIComponent(injectedCode)}`)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          done(err)
        } else {
          assert.strictEqual(
            res.text.includes(injectedCode),
            false,
            'Código injetado não deve ser executado'
          )
          done()
        }
      })
  })
})
