const { Celebrity } = require('../models')

module.exports = app => {
  app.post('/celebrity', (req, res) => {
    Celebrity.create(req.body.celeb)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.get('/celebrity/:id', (req, res) => {
    Celebrity.findOne({ id: req.params.id })
      .then(celeb => res.json(celeb))
      .catch(e => console.log(e))
  })

  app.put('/celebrity/:id', (req, res) => {
    Celebrity.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })
}
