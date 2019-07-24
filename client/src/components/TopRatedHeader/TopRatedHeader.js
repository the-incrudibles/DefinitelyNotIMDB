import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import topRatedContext from '../../utils/topRatedContext'
import Typography from '@material-ui/core/Typography'

const TopRatedHeader = _ => {

  const [topRatedState, setTopRatedState] = useState(
    {
      topRatedMovie: []
    }
  )
  useEffect(_ => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_APIKEY}`)
      .then(r => {

        let topMovieArr = []
        r.data.results.map(elem => {
          console.log(elem)

          topMovieArr.push({
            imageArr: 'https://image.tmdb.org/t/p/original' + elem.poster_path,
            titleArr: elem.title,
            overviewArr: elem.overview
          })
        })

        setTopRatedState({ ...topRatedState, topRatedMovie: topMovieArr })

      })
      .catch(e => console.log('error:', e))
  }, [])




  return (
    <div className="containerDiv">
      <div className='searchTypography'>
        <Typography variant='h6'>Trending Movies</Typography>
      </div>
      {topRatedState.topRatedMovie.map(elem => {
        console.log(elem)
        return (
          <>
            <topRatedContext.Provider value={elem}>
              <Cards />
            </topRatedContext.Provider>
          </>
        )
      })}
    </div>
  )

}
export default TopRatedHeader
