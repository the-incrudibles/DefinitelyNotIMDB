import React, { Link } from 'react'
import axios from 'axios'

const GenreCalls = {
  getThoseGenres: id => axios.get(`/genre`)
}

export default GenreCalls
