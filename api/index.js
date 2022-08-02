const express = require('express')
const routes = require('./routes/index.js')

const app = express()
const port = 3333

routes(app)

app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`))

module.exports = app