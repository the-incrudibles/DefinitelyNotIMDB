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

  newWatchlistState.handleAddWatchList = _ => {
    axios.get(`/user/${localStorage.getItem('id')}`)
      .then(({ data }) => {
        console.log(data)
        let watchlist = []
        watchlist.push(newWatchlistState.watchlist)
        if (watchlist.indexOf(localStorage.getItem('movieID'))) {
          console.log('making array')
          watchlist.push(localStorage.getItem('movieID'))
          console.log('pushing to array')
          setNewWatchlistState(...[newWatchlistState], watchlist)
          console.log('setting state')
          axios.put(`/user/${localStorage.getItem('id')}`, { watchlist: newWatchlistState.watchlist })
            .then(_ => console.log('help'))
            .catch(e => console.log(e))
        } else {
          console.log('oops')
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <div className='addWatchlistButton'>
      <Fab color='default' aria-label='Add' size='small' onClick={newWatchlistState.handleAddWatchList} value={parseInt(localStorage.getItem('movieID'))}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default AddWatchListButton
