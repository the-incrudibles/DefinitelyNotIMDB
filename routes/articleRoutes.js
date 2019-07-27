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
    Article.create({
      headline: 'this is a throw away title',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque architecto quas aliquam itaque tempore sed vero quo pariatur, ea quidem temporibus voluptatem illo eveniet dolorum minima tempora! Harum, quidem.',
      image: 'a sample url'
    })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
