const { Article } = require('../models')

module.exports = app => {
  app.get('/articles', (req, res) => {
    Article.find({})
      .then(articles => res.json(articles))
      .catch(e => console.log(e))
  })


  app.get('/articles/:id', (req, res) => {
    Article.findOne({ _id: req.params.id })
      .then(article => res.json(article))
      .catch(e => console.log(e))
  })

  app.post('/articles', (req, res) => {
    Article.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
