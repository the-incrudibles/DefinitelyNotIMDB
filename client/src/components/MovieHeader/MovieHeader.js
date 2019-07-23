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
import AddWatchListButton from '../../components/AddWatchListButton'
// import MovieContext from '../../utils/movieContext'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 25
  },
  card: {
    maxWidth: 350
  },
  media: {
    maxHeight: 200,
    maxWidth: 200
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  }
}))
let movieID = localStorage.getItem('id')

const MovieHeader = _ => {
  const [data, setData] = useState([])
  const classes = useStyles()

  useEffect(_ => {
    //   fetch movie database on product '/movie/${id}'
    axios.get(`https://api.themoviedb.org/3/movie/399579?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      .then(r => {
        setData(r.data)
        console.log(r)
      })
  }, [])

  return (
    <div>
      <Paper className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
          
          <img className="movieImg" src={`https://image.tmdb.org/t/p/original`} alt="" />
          
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h5' component='h3'>
              {data.title}
            </Typography>
            <Typography component='p'>
                Rating: {data.vote_average}
            </Typography>
            <Typography>
              <AddWatchListButton />
            </Typography>

          </Grid>
          <Typography variant='h6' gutterBottom>
            <strong>Overview</strong>
          </Typography>
          <Typography>
            {data.overview}
          </Typography>
        </Grid>
      </Paper>
    </div>
  )
}

export default MovieHeader
