import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import WatchlistContext from '../../utils/Watchlist.js'
import CardContext from '../../utils/CardContext'
import Cards from './Cards'
import { set } from 'mongoose';

const MyWatchList = _ => {
  const [watchListState, setWatchListState] = useState(
    {
      watchlist: []
    }
  )

  useEffect(_ => {
    let watchlist = []
    WatchlistContext.getWatchlist(localStorage.getItem('id'))
      .then(({ data }) => {
        data.watchlist.map(async (movie) => {
          const result = await axios.get(`/movie/${parseInt(movie)}`)
            .then(({ data: movie }) => {
              watchlist.push(...watchListState.watchlist)
              watchlist.push(movie)
              setWatchListState({ ...watchListState, watchlist })
            })
            .catch(e => console.log(e))
        })
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      {watchListState.watchlist !== [] ?
        <div className='containerDiv'>
          <div className='searchTypography'>
            <Typography variant='h6'>My Watch List</Typography>
          </div>
          <CardContext.Provider value={watchListState}>
            <Cards />
          </CardContext.Provider>
        </div> : ''
      }
    </>
  )
}
export default MyWatchList
