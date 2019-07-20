module.exports = (Schema, model) => model(`Celebrity`, new Schema({
  popularity: Number,
  id: Number,
  profile_path: String,
  name: String,
  known_for: Array
}))
