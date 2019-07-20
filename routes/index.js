module.exports = app => {
  require(`./userRoutes`)(app)
  require(`./movieRoutes`)(app)
  require('./celebrityRoutes.js')(app)
}
