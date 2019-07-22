module.exports = app => {
  require(`./userRoutes`)(app)
  require(`./movieRoutes`)(app)
  require('./celebrityRoutes')(app)
  require('./showRoutes')(app)
  require('./commentRoutes')(app)
  require('./genreRoutes')(app)
}
