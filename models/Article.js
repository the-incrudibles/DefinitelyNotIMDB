module.exports = (Schema, model) => model(`Article`, new Schema({
  headline: String,
  summary: String,
  image: String
}))
