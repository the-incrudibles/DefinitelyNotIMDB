import axios from 'axios'

const MovieContext = {
  getMovie: id => axios.get(`/movie/${id}`),
  addComment: id => axios.put(`/movie/${id}`),
  getComment: id => axios.get(`/comment/${id}`)

}

export default MovieContext
