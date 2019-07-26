import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AddWatchListButton from '../../components/AddWatchListButton'
import Chip from '@material-ui/core/Chip'
import GuideBox from '../../components/GuideBoxApi'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 15
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
    margin: '1px',
    textDecoration: 'none'
  }
}))

const MovieHeader = _ => {
  const [data, setData] = useState({ genres: [] })
  const [movieState, setMovieState] = useState({
    movie: {},
    release_date: [],
    renderMovie: _ => {
      axios.get(`https://api.themoviedb.org/3/movie/${parseInt(localStorage.getItem('movieID'))}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
        .then(({ data }) => {
          if (!data) {
            movieState.renderMovie()
          } else {
            setMovieState({ ...movieState, movie: data, release_date: data.release_date })
            setData({ ...data, genres: data.genres })
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
              <Typography variant='h6' component='h3' className="movieHeaderText">
                {movieState.movie.title}
              </Typography>
              <Typography component='p' className="movieHeaderText">
                Rating: {movieState.movie.vote_average}/10
              </Typography>
              <Typography component='p' className="movieHeaderText">
                {
                  movieState.release_date ?
                    <>
                      <Typography component='p' className="movieHeaderText">Released:</Typography>{`${movieState.release_date.slice(5, 7)}-${movieState.release_date.slice(8, 10)}-${movieState.release_date.slice(0, 4)}`}
                    </> : null
                }
              </Typography>
              <div className="addWatchlistButton">
                <Typography>
                  <AddWatchListButton />
                </Typography>
              </div>
              <div className='genreChips'>
                {
                  data.genres.map(genre =>
                    <Link className='genreChips' to='/genre' key={genre.name} onClick={_ => {
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
        <GuideBox />
      </Paper>
    </div>
  )
}

export default MovieHeader
