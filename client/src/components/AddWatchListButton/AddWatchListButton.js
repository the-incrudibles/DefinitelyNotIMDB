import React, { useState, useEffect, useRef } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'
import Watchlist from '../../utils/Watchlist.js'

const AddWatchListButton = _ => {
  const Movie = useRef()

  const [newWatchlistState, setNewWatchlistState] = useState({
    watchlist: []
  })
  const handleGetWatchList = _ => {
    Watchlist.getWatchlist()
      .then(({ data: movies }) => this.setState({ movies }))
      .catch(e => console.error(e))
  }
  const handleAddWatchList = event => {
    Watchlist.addWatchlist(event.target.id)
      .then(_ => this.handleGetWatchList())
      .catch(e => console.error(e))
  }

  return (
    <div className='addWatchlistButton'>
      <Fab color='default' aria-label='Add' size='small' onClick={handleAddWatchList} value={parseInt(localStorage.getItem('movieID'))}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default AddWatchListButton
