const { Schema, model } = require(`mongoose`)

const db = {
  User: require(`./User.js`)(Schema, model),
  Movie: require(`./Movie.js`)(Schema, model),
  Celebrity: require('./Celebrity.js')(Schema, model),
  Genre: require('./Genre.js')(Schema, model),
  TVShow: require('./TVShow.js')(Schema, model),
  Comment: require('./Comment.js')(Schema, model),
  Article: require('./Article.js')(Schema, model)
}

module.exports = db
