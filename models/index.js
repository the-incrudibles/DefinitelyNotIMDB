const { Schema, model } = require(`mongoose`)

const db = {
  User: require(`./User.js`)(Schema, model),
  Movie: require(`./Movie.js`)(Schema, model)
}