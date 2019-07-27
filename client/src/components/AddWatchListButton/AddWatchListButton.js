import React, { useState, useEffect, useRef } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'
import Watchlist from '../../utils/Watchlist.js'

const AddWatchListButton = _ => {
  const [newWatchlistState, setNewWatchlistState] = useState({
    watchlist: []
  })

  newWatchlistState.handleGetWatchList = id => {
<<<<<<< HEAD
    console.log('help')
=======
    // console.log('help')
    // let userId = localStorage.getItem('id')
>>>>>>> master
  }

  newWatchlistState.handleLoadWatchList = async () => {
    const result = await axios.get(`/user/${localStorage.getItem('id')}`)
      .then(({ data }) => {
        let watchlist = []
        watchlist.push(...data.watchlist)
        setNewWatchlistState({ ...newWatchlistState, watchlist })
      })
      .catch(e => console.log(e))
  }

  newWatchlistState.handleAddWatchList = _ => {
    let addMovie = localStorage.getItem('movieID')
    let watchlist = newWatchlistState.watchlist
    // console.log(watchlist)
    if (watchlist.indexOf(addMovie) === -1) {
      watchlist.push(addMovie)
      setNewWatchlistState({ ...newWatchlistState, watchlist })
      axios.put(`/user/${localStorage.getItem('id')}`, { watchlist: watchlist })
        .then(_ => console.log('Movie Added!'))
        .catch(e => console.log(e))
    } else {
      // console.log('Movie already in watchlist!')
    }
  }

  useEffect(_ => {
    newWatchlistState.handleLoadWatchList()
  }, [])

  return (
    <div className='addWatchlistButton'>
      <Fab color='default' aria-label='Add' size='small' onClick={newWatchlistState.handleAddWatchList} value={parseInt(localStorage.getItem('movieID'))}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default AddWatchListButton
