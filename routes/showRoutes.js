const { TVShow } = require('../models')

module.exports = app => {
  app.post('/show', (req, res) => {
    TVShow.create(req.body.show)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.get('/show/:id', (req, res) => {
    TVShow.findOne({ id: req.params.id })
      .then(show => res.json(show))
      .catch(e => console.log(e))
  })

  app.put('/show/:id', (req, res) => {
    TVShow.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })
}
