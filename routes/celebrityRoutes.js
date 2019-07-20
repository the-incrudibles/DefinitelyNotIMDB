const { Celebrity } = require('../models')

module.exports = app => {
  app.post('/celebrity', (req, res) => {
    Celebrity.create(req.body)
      .then(_ => res.SendStatus(200))
      .catch(e => console.log(e))
  })
}
