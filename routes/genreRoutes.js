const { Genre } = require('../models')

module.exports = app => {
  app.post('/genre', (req, res) => {
    Genre.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.get('/genre', (req, res) => {
    Genre.find({})
      .then(genres => res.json(genres))
      .catch(e => console.log(e))
  })
}
