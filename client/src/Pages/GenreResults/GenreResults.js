import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GenreResultsCards from '../../components/GenreResultsCards'
import genreResultsContext from '../../utils/genreResultsContext'
import Typography from '@material-ui/core/Typography'

const GenreResults = _ => {
  const [genreResultsState, setGenreResultsState] = useState({
    genreResultsMovies: []
  })

  useEffect(_ => {
    // API link needs to be changed to grab all movies instead of ones that are now playing in theaters
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${localStorage.getItem('genreID')}`)
      .then(({ data }) => {
        setGenreResultsState({ ...genreResultsState, genreResultsMovies: data.results })
        // console.log(data.results)
      })
      .catch(e => console.log('error:', e))
  }, [])

  return (
    <>
      <div className="containerDiv">
        <div className='searchTypography'>
          <Typography variant='h6'>{localStorage.getItem('genreName')}</Typography>
        </div>
        <genreResultsContext.Provider value={genreResultsState}>
          <GenreResultsCards />
        </genreResultsContext.Provider>
      </div>
    </>
  )
}
export default GenreResults
