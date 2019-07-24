import React, { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const AddWatchListButton = _ => {
  return (
    <div className='addWatchlistButton'>
      <Fab color='default' aria-label='Add' size='small'>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default AddWatchListButton






  