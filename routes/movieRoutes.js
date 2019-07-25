const { Movie } = require('../models')

module.exports = app => {
  app.post('/movie', (req, res) => {
    Movie.create(req.body.movie)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.get('/movie/:id', (req, res) => {
    Movie.findOne({ id: req.params.id })
      .then(movie => res.json(movie))
      .catch(e => console.log(e))
  })

  app.put('/movie/:id', (req, res) => {
    Movie.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(_ => {
        res.sendStatus(200)
        // console.log('updated in db')
      })
      .catch(e => console.log(e))
  })
}
