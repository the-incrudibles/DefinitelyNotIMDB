module.exports = (Schema, model) => model(`Movie`, new Schema({
  vote_count: String,
  tmdb_id: String,
  vote_average: String,
  title: String,
  popularity: String,
  poster_path: String,
  original_language: String,
  original_title: String,
  genre_ids: String,
  adult: String,
  overview: String,
  release_date: String

  // cast
  // director
}))
