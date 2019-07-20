import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 25
  }
}))

// useEffect(_=>{
//     axios.post('/')
//      .then(r =>{
//          console.log(r)
//      })
// })
const AddMovieComments = _ => {
  const classes = useStyles()
  return (
    <div>
      <Typography>
                COMMENT BELOW
      </Typography>

    </div>
  )
}

export default AddMovieComments
