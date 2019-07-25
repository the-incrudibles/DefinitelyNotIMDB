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
    margin: '1px'
  }
}))

const TVShowHeader = _ => {
  const [tvState, setTvState] = useState({
    tvshow: {},
    renderTv: _ => {
      console.log('has run')
      axios.get(`/tv/${parseInt(localStorage.getItem('tvID'))}`)
        .then(({ data }) => {
          if (!data) {
            tvState.renderTv()
          } else {
            setTvState({ ...tvState, tvshow: data })
            console.log(data)
          }
        })
        .catch(e => console.log(e))
    }
  })

  const [data, setData] = useState({ genres: [] })

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
            <Typography variant='h5' component='h3'>
              {/* {tvState.tv.name} */}
            </Typography>
            <Typography component='p'>
              {/* Rating: {tvState.tv.vote_average} */}
            </Typography>
            <Typography>
              <AddWatchListButton />
            </Typography>
            <div className='genreChips'>
              {
                data.genres.map(genre =>
                  <Chip
                    size='small'
                    label={genre.name}
                    className={classes.chip}
                    component='a'
                    href='/genre'
                    clickable
                    color='primary'
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
            {/* {tvState.tv.overview} */}
          </Typography>
        </Grid>
      </Paper>
    </div>
  )
}

export default TVShowHeader
