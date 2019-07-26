const { NewsStory } = require('../models')

module.exports = app => {
  app.get('/articles', (req, res) => {
    NewsStory.find({})
      .then(articles => res.json(articles))
      .catch(e => console.log(e))
  })

  app.get('/articleinfo/:id', (req, res) => {
    NewsStory.findOne({ _id: req.params.id })
      .then(article => res.json(article))
      .catch(e => console.log(e))
  })

  app.post('/articles', (req, res) => {
    NewsStory.create({
      title: 'this is a throw away title',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque architecto quas aliquam itaque tempore sed vero quo pariatur, ea quidem temporibus voluptatem illo eveniet dolorum minima tempora! Harum, quidem.',
      picture: 'a sample url'
    })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
