module.exports = app => {
  userRoutes: require(`./userRoutes`)(app)
  movieRoutes: require(`./movieRoutes`)(app)
}