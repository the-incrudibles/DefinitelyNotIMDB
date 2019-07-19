module.exports = (Schema, model) => model(`Celebrity`, new Schema({
  popularity: Number,
  id: Number,
  Name: String,
  known_for: Array
}))
