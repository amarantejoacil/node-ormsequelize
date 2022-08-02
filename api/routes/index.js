const bodyParses = require('body-parser')
const pessoas = require('./pessoasRoute')

module.exports = app => {
  app.use(bodyParses.json())
  app.use(pessoas)
}