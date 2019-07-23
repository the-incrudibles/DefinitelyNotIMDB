import React, { createContext } from 'react'
import axios from 'axios'

const MovieContext = {
  getMovie: id => axios.get(`/movie/${id}`),
  addComment: id => axios.put(`/movie/${id}`)

}

export default MovieContext
