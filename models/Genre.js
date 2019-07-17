module.exports = (Schema, model) => model(`Genre`, new Schema({
  name: String,
  id: Number,
  picture_aws: String
}))
