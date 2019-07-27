import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import CardActionArea from '@material-ui/core/CardActionArea'
import WatchlistContext from '../../utils/Watchlist.js'
import CardContext from '../../utils/CardContext'
import Cards from './Cards'


const MyWatchList = _ => {
  const [watchListState, setWatchListState] = useState(
    {
      watchlist: []
    }
  )

  useEffect(_ => {
    WatchlistContext.getWatchlist(localStorage.getItem('id'))
      .then(({ data }) => {
        console.log(data)
        console.log(data.watchlist)
        data.watchlist.map(movie => {
          axios.get(`/movie/${parseInt(movie)}`)
            .then(({ data: movie }) => {
              let watchlist = []
              watchlist.push(...watchListState.watchlist)
              watchlist.push(movie)
              console.log(watchlist)
              setWatchListState({ ...watchListState, watchlist })
              console.log('state updated')
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
            <Typography variant='h6'>My watch List</Typography>
          </div>
          {
            watchListState.watchlist ? watchListState.watchlist.map(movie => {
              return (
                <>
                  {<CardContext.Provider value={movie}>
                    <Cards />
                  </CardContext.Provider>}

                </>
              )
            }) : null
          }
        </div> : ''
      }
    </>
  )
}
export default MyWatchList
