module.exports = (Schema, model) => {
  const User = new Schema({
    name: String,
    username: String,
    email: String
  })

  User.plugin(require('passport-local-mongoose'))

  return model('User', User)
}
