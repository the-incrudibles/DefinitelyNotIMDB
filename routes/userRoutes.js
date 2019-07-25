const { User } = require('../models')
const jwt = require('jsonwebtoken')
const passport = require('passport')

module.exports = app => {
  app.post('/verify', passport.authenticate('jwt', { session: false }), (req, res) => res.sendStatus(200))

  app.post('/register', (req, res) => {
    User.register(new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      admin: req.body.admin
    }), req.body.password, e => {
      if (e) throw e
      User.authenticate()(req.body.username, req.body.password, (e, user) => {
        if (e) throw e
        res.json({ isLoggedIn: !!user, user: user.username, token: jwt.sign({ id: user._id }, 'help'), admin: user.admin })
      })
    })
  })
  app.post('/login', (req, res) => {
    User.authenticate()(req.body.username, req.body.password, (e, user) => {
      if (e) throw e
      res.json({ isLoggedIn: !!user, user: user.username, token: jwt.sign({ id: user._id }, 'help'), admin: user.admin })
    })
  })
  app.put('/user/:id', (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
