import React, { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

}))
const AddWatchListButton = _ => {
  const classes = useStyles()

  return (
    <Fab color='default' aria-label='Add' className={classes.fab} size='small'>
      <AddIcon />
    </Fab>
  )
}

export default AddWatchListButton
