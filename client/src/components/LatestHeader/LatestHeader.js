import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LatestCards from './LatestCards'
import latestContext from '../../utils/latestContext'
import Typography from '@material-ui/core/Typography'

const LatestHeader = _ => {

  const [latestState, setLatestState] = useState(
    {
      latestMovie: []
    }
  )

  useEffect(_ => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&page=1`)
      .then(r => {

        let latestArr = []
        r.data.results.map(elem => {
          latestArr.push({
            imageArr: 'https://image.tmdb.org/t/p/original' + elem.poster_path,
            titleArr: elem.title,
            overviewArr: elem.overview
          })
        })

        setLatestState({ ...latestState, latestMovie: latestArr })

      })
      .catch(e => console.log('error:', e))
  }, [])




  return (
    <div className="containerDiv">
      <div className='searchTypography'>
        <Typography variant='h6'>Now Playing in Theaters</Typography>
      </div>
      {latestState.latestMovie.map(elem => {
        return (
          <>
            <latestContext.Provider value={elem}>
              <LatestCards />
            </latestContext.Provider>
          </>
        )
      })}
    </div>
  )
}
export default LatestHeader
