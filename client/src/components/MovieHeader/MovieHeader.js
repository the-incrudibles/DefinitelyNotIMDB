import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AddWatchListButton from '../../components/AddWatchListButton'
import Chip from '@material-ui/core/Chip'
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
  },
  chip: {
    margin: "1px",
  }
}))

const MovieHeader = _ => {
  const [data, setData] = useState({ genres: [] })
  const [movieState, setMovieState] = useState([])
  
  const classes = useStyles()

  movieState.renderMovie = _ =>{
    const [movieState, setMovieState] = useState({
        movie: {},
        renderMovie: _ => {
          console.log('has run')
          axios.get(`/movie/${parseInt(localStorage.getItem('movieID'))}`)
            .then(({ data }) => {
              if (!data) {
                movieState.renderMovie()
              } else {
                setMovieState({ ...movieState, movie: data })
                console.log(data)
              }
            })
            .catch(e => console.log(e))
        }
      })    
      useEffect(_ => {
        movieState.renderMovie()
      }, [])

  return (
    <div>
      <Paper className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <img className="movieImg" src={`https://image.tmdb.org/t/p/original${movieState.poster_path}`} alt="" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h5' component='h3'>
              {movieState.title}
            </Typography>
            <Typography component='p'>
                Rating: {movieState.vote_average}
            </Typography>
            <Typography>
              <AddWatchListButton />
            </Typography>
            <div className="genreChips">
              {
                data.genres.map(genre =>
                  <Chip
                    size="small"
                    label={genre.name}
                    className={classes.chip}
                    component="a"
                    href="/genre"
                    clickable
                    color="primary"
                  // onClick={handleClick}
                  />
                )
              }
            </div>
          </Grid>
          <Typography variant='h6' gutterBottom>
            <strong>Overview</strong>
          </Typography>
          <Typography>
            {movieState.overview}
          </Typography>
        </Grid>
      </Paper>
    </div>
  )
}
}

export default MovieHeader
