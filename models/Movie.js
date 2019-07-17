module.exports = (Schema, model) => model(`Movie`, new Schema({
  vote_count: Number,
  tmdb_id: Number,
  vote_average: Number,
  title: String,
  popularity: Number,
  poster_path: String,
  original_language: String,
  original_title: String,
  genre_ids: Array,
  adult: String,
  overview: String,
  release_date: String

  // cast
  // director
}))
