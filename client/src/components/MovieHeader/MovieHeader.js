import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    margin: '1px'
  }
}))

const MovieHeader = _ => {
  const [data, setData] = useState({ genres: [] })
  const [movieState, setMovieState] = useState({
    movie: {},
    renderMovie: _ => {
      axios.get(`https://api.themoviedb.org/3/movie/${parseInt(localStorage.getItem('movieID'))}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      //   axios.get(`/movie/${parseInt(localStorage.getItem('movieID'))}`)
        .then(({ data }) => {
          if (!data) {
            movieState.renderMovie()
          } else {
            setMovieState({ ...movieState, movie: data })
            setData({ ...data, genres: data.genres })
            console.log(data)
          }
        })
        .catch(e => console.log(e))
    }
  })

  const classes = useStyles()

  useEffect(_ => {
    movieState.renderMovie()
  }, [])

  return (
    <div>
      <Paper className={classes.root}>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <img className='movieImg' src={`https://image.tmdb.org/t/p/original${movieState.movie.poster_path}`} alt='' />
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h5' component='h3'>
                {movieState.movie.title}
              </Typography>
              <Typography component='p'>
              Rating: {movieState.movie.vote_average}
              </Typography>
              <Typography>
                <AddWatchListButton />
              </Typography>
              <div className='genreChips'>
                {
                  data.genres.map(genre =>
                    <Link to='/genre' onClick={_ => {
                      localStorage.setItem('genreID', genre.id)
                      localStorage.setItem('genreName', genre.name)
                    }}>
                      <Chip
                        size='small'
                        label={genre.name}
                        className={classes.chip}
                        component='a'
                        clickable
                        color='primary'
                      />
                    </Link>
                  )
                }
              </div>
            </Grid>
            <Typography variant='h6' gutterBottom>
              <strong>Overview</strong>
            </Typography>
            <Typography>
              {movieState.movie.overview}
            </Typography>
          </Grid>
        </div>
      </Paper>
    </div>
  )
}

export default MovieHeader
