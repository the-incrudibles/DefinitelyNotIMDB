module.exports = (Schema, model) => model(`NewsArticle`, new Schema({
  title: String,
  body: String,
  picture: String
}))
