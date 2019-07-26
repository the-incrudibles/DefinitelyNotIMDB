module.exports = (Schema, model) => model(`Comment`, new Schema({
  id: Number,
  text: String,
  author: String,
  flagged: Boolean,
  movie: Number
}))
