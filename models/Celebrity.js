module.exports = (Schema, model) => model(`Celebrity`, new Schema({
  adult: Boolean,
  also_known_as: Array,
  biography: String,
  birthday: String,
  deathday: String,
  gender: Number,
  homepage: String,
  id: Number,
  imdb_id: String,
  known_for_department: String,
  name: String,
  place_of_birth: String,
  popularity: Number,
  profile_path: String
}))
