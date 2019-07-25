import React, { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'

const AddWatchListButton = _ => {
  const [watchlistState, setWatchList] = useState([])
  
  const getWatchList = _ =>{
    axios.get(`/user/${(localStorage.getItem('user'))}`)
    .then(({data})=>{
        setWatchList(data.watchlist)
    })
  }
  const handleAddWatchList = event => {
    getWatchList()
    axios.put(`/user/${(localStorage.getItem('user'))}`, {
        watchlist: watchlistState
    })
    .then(_ =>{
        console.log('success')
    })
    .catch(e => console.log(e))

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
