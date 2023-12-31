const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/greeting/:name', (req, res) => {
  const name = req.params.name
  res.send(`Hello, ${name}!`)
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

module.exports = app // Exportar o app para uso nos testes
