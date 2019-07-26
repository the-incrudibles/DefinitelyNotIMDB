module.exports = (Schema, model) => model(`NewsArticle`, new Schema({
  headline: String,
  summary: String,
  image: String
}))
