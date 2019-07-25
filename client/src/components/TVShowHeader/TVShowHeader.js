import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AddWatchListButton from '../../components/AddWatchListButton'
import Chip from '@material-ui/core/Chip'

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

const TVShowHeader = _ => {
  const [data, setData] = useState({ genres: [] })
  const [tvState, setTvState] = useState({
    tvshow: {},
    first_air_date: [],
    renderTv: _ => {
      axios.get(`https://api.themoviedb.org/3/tv/${parseInt(localStorage.getItem('tvID'))}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
        .then(({ data }) => {
          if (!data) {
            tvState.renderTv()
          } else {
            setTvState({ ...tvState, tvshow: data, first_air_date: data.first_air_date })
            setData({ ...data, genres: data.genres })
          }
        })
        .catch(e => console.log(e))
    }
  })
  const classes = useStyles()

  useEffect(_ => {
    tvState.renderTv()
  }, [])

  return (
    <div>
      {console.log(tvState.tvshow)}
      <Paper className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <img className='movieImg' src={`https://image.tmdb.org/t/p/original${tvState.tvshow.poster_path}`} alt='' />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h5' component='h3' className="movieHeaderText">
              {tvState.tvshow.name}
            </Typography>
            <Typography component='p' className="movieHeaderText">
              Rating: {tvState.tvshow.vote_average}
            </Typography>
            {/* <Typography component='p' className="movieHeaderText">
              {
                tvState.first_air_date ?
                  <>
                    <Typography component='p' className="movieHeaderText">First aired:</Typography>{`${tvState.first_air_date.slice(5, 7)}-${tvState.first_air_date.slice(8, 10)}-${tvState.first_air_date.slice(0, 4)}`}
                  </> : null
              }
            </Typography> */}
            <div className="addWatchlistButton">
              <Typography>
                <AddWatchListButton />
              </Typography>
            </div>
            <div className='genreChips'>
              {
                data.genres.map(genre =>
                  <Link className='genreChips' to='/genre' onClick={_ => {
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
            {tvState.tvshow.overview}
          </Typography>
        </Grid>
      </Paper>
    </div>
  )
}

export default TVShowHeader
