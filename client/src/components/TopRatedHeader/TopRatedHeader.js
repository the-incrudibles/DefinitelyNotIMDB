import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
    root: {
      padding: 25
    },
    card: {
        maxWidth: 350
    },
    media:{
        maxHeight: 200,
        maxWidth:200
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
      },
      title: {
        color: theme.palette.primary.light,
      }
  }))

  const TopRatedHeader = _ => {
    const [data, setData] = useState([])
    const classes = useStyles()
  
    useEffect(_ => {
      axios.get(`https://api.themoviedb.org/3/movie/399579?api_key=${env.process.REACT_APP_TMDB_APIKEY}&language=en-US&sort_by=popularity.desc`)
        .then(r => {
          setData(r.data)
          console.log(r)
        })
    }, [])
}
