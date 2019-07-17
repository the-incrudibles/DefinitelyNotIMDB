module.exports = app => {
  require(`./userRoutes`)(app)
  require(`./movieRoutes`)(app)
}
