module.exports = (Schema, model) => {
  const User = new Schema({
    name: String,
    username: String,
    email: String,
    admin: { type: Boolean, default: false }
  })

  User.plugin(require('passport-local-mongoose'))

  return model('User', User)
}
