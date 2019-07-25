module.exports = (Schema, model) => model(`Comment`, new Schema({
  text: String,
  author: String,
  flagged: Boolean,
  movie: Number
}))
