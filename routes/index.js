module.exports = app => {
  require(`./userRoutes`)(app)
  require(`./movieRoutes`)(app)
  require('./celebrityRoutes.js')(app)
  require('./showRoutes.js')(app)
}
