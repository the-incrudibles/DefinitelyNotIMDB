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
    console.log('help')
    // let userId = localStorage.getItem('id')
  }

  newWatchlistState.handleLoadWatchList = _ => {
    axios.get(`/user/${localStorage.getItem('id')}`)
      .then(({ data }) => {
        console.log(data)
        let watchlist = []
        watchlist.push([...data.watchlist])
        setNewWatchlistState({ ...newWatchlistState, watchlist })
        console.log(newWatchlistState.watchlist)
      })
      .catch(e => console.log(e))
  }

  newWatchlistState.handleAddWatchList = _ => {
    let addMovie = localStorage.getItem('movieID')
    let watchlist = newWatchlistState.watchlist
    console.log(watchlist)
    if (watchlist.indexOf(addMovie) === -1) {
      watchlist.push(addMovie)
      setNewWatchlistState({ ...newWatchlistState, watchlist })
      axios.put(`/user/${localStorage.getItem('id')}`, { watchlist: watchlist })
        .then(_ => console.log('Movie Added!'))
        .catch(e => console.log(e))
    } else {
      console.log('Movie already in watchlist!')
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
