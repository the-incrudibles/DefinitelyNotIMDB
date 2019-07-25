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
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}& language=en - US & sort_by=popularity.desc & include_adult=false & include_video=false & page=1 & with_genres=${28}`)
      // parseInt(localStorage.getItem('genreID'))
      .then(({ data }) => {
        setGenreResultsState({ ...genreResultsState, genreResultsMovie: data.results })
        console.log(data)
      })
      .catch(e => console.log('error:', e))
  }, [])

  return (
    // <h1>still on the /genre page</h1>
    <div className="containerDiv">
      <div className='searchTypography'>
        <Typography variant='h6'>{localStorage.getItem('genreName')}</Typography>
      </div>
      {
        <genreResultsContext.Provider value={genreResultsState.genreResultsMovies}>
          <GenreResultsCards />
        </genreResultsContext.Provider>
      }
    </div>
  )
}
export default GenreResults
