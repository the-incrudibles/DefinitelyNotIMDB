import axios from 'axios'

const SearchResult = {
  // for celebs
  axiosForCeleb: id => {
    axios.get(`/celebrity/${id}`)
      .then(celeb => {
        if (!celeb.data) {
          SearchResult.postCeleb(id)
          localStorage.setItem('celebID', id)
        } else {
          SearchResult.putCeleb(id)
          localStorage.clear('celebID')
        }
      })
      .catch(e => console.log(e))
  },
  postCeleb: id => {
    axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      .then(({ data: celeb }) => {
        axios.post('/celebrity', { celeb })
      })
      .catch(e => console.log(e))
  },
  putCeleb: id => {
    axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      .then(({ data: celeb }) => {
        axios.put(`/celebrity/${celeb.id}`, { celeb })
      })
      .catch(e => console.log(e))
  },
  // for shows
  axiosForShow: id => {
    axios.get(`/show/${id}`)
      .then(show => {
        if (!show.data) {
          SearchResult.postShow(id)
          localStorage.setItem('showID', id)
        } else {
          SearchResult.putShow(id)
          localStorage.setItem('showID', id)
        }
      })
      .catch(e => console.log(e))
  },
  postShow: id => {
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      .then(({ data: show }) => {
        axios.post('/show', { show })
      })
      .catch(e => console.log(e))
  },
  putShow: id => {
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      .then(({ data: show }) => {
        axios.put(`/show/${show.id}`, { show })
      })
      .catch(e => console.log(e))
  },
  // for movies
  axiosForMovie: id => {
    axios.get(`/movie/${id}`)
      .then(movie => {
        if (!movie.data) {
          SearchResult.postMovie(id)
          localStorage.setItem('movieID', id)
        } else {
          SearchResult.putMovie(id)
          localStorage.setItem('movieID', id)
        }
      })
      .catch(e => console.log(e))
  },
  postMovie: id => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      .then(({ data: movie }) => {
        axios.post('/movie', { movie })
      })
      .catch(e => console.log(e))
  },
  putMovie: id => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      .then(({ data: movie }) => {
        axios.put(`/movie/${movie.id}`, { movie })
      })
      .catch(e => console.log(e))
  }
}

export default SearchResult
