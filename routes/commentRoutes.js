const { Comment } = require('../models')

module.exports = app => {
  app.get('/comment/:movie', (req, res) => {
    Comment.findAll({ movie: req.params.movie })
      .then(comments => res.json(comments))
      .catch(e => console.log(e))
  })

  app.get('/flag', (req, res) => {
    Comment.FindAll({ flagged: true })
      .then(comments => res.json(comments))
      .catch(e => console.log(e))
  })

  app.post('/comment', (req, res) => {
    Comment.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.put('/comment/:id', (req, res) => {
    Comment.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.delete('/comment/:id', (req, res) => {
    Comment.findOneAndRemove({ id: req.params.id })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
