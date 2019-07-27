import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import WatchlistContext from '../../utils/Watchlist.js'
import CardContext from '../../utils/CardContext'
import Cards from './Cards'

const MyWatchList = _ => {
  const [watchListState, setWatchListState] = useState(
    {
      watchList: ''

    }
  )

  useEffect(_ => {
    WatchlistContext.getWatchlist(localStorage.getItem('id'))
      .then(({ data }) => {
        let count = 0
        let fetchedMovieArr = []
        let watchListLength = data[0].watchlist.length
        // let watchListLength=data[0].watchList.length
        data[0].watchlist.map(elem => {
          axios.get(`https://api.themoviedb.org/3/movie/${parseInt(elem)}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
            .then(result => {
              fetchedMovieArr.push({
                id: parseInt(elem),
                posterURL: 'https://image.tmdb.org/t/p/original' + result.data.poster_path,
                title: result.data.title,
                overview: result.data.overview
              })
              count = count + 1
              if (count === watchListLength) {
                setWatchListState({ ...watchListState, watchList: fetchedMovieArr })
                // console.log(fetchedMovieArr)
                // console.log(watchListState.watchList)
              }
            })
            .catch(e => console.log(e))
        })
      })
      .catch(e => console.log(e))
  }, [])

  // watchListState.addWatchList=movieId=>{
  //     let newWatchList=watchListState.watchList
  //     newWatchList.push(movieId)
  //     setwatchListState({ ...watchListState,watchList: newWatchList })
  //     WatchlistContext.addWatchlist(watchListState.watchList)

  // }
  // watchListState.removeWatchList=movieId=>{
  //   let newWatchList=watchListState.watchList
  //     newWatchList.push(movieId)
  //     setwatchListState({ ...watchListState,watchList: newWatchList })
  //     WatchlistContext.addWatchlist(watchListState.watchList)
  // }

  return (
    <div className='containerDiv'>
      <div className='searchTypography'>
        <Typography variant='h6'>My Watch List</Typography>
      </div>
      {
        watchListState.watchList ? watchListState.watchList.map(elem => {
          return (
            <>
              {<CardContext.Provider value={elem}>
                <Cards />
              </CardContext.Provider>}
            </>
          )
        }) : null
      }
    </div>
  )
}
export default MyWatchList
