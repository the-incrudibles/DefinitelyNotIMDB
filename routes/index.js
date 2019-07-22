module.exports = app => {
  require(`./userRoutes`)(app)
  require(`./movieRoutes`)(app)
  require('./commentRoutes')(app)
  require('./genreRoutes')(app)
}
