import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

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
    margin: '1px'
  }
}))

const CelebrityHeader = _ => {
  const [celebrityState, setCelebrityState] = useState({
    celebrity: {},
    renderCelebrity: _ => {
      axios.get(`https://api.themoviedb.org/3/person/${parseInt(localStorage.getItem('celebrityID'))}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
        .then(({ data }) => {
          if (!data) {
            celebrityState.renderCelebrity()
          } else {
            setCelebrityState({ ...celebrityState, celebrity: data })
          }
        })
        .catch(e => console.log(e))
    }
  })

  const classes = useStyles()

  useEffect(_ => {
    celebrityState.renderCelebrity()
  })

  return (
    <div>
      {console.log(celebrityState.celebrity)}
      <Paper className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <img className='movieImg' src={`https://image.tmdb.org/t/p/original${celebrityState.celebrity.profile_path}`} alt={celebrityState.celebrity.name} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h5' component='h3'>
              {celebrityState.celebrity.name}
            </Typography>
            <Typography component='p'>
              Born on: {celebrityState.celebrity.birthday} in: {celebrityState.celebrity.place_of_birth}
            </Typography>
            <Typography>
              Gender: {celebrityState.celebrity.gender}
            </Typography>
          </Grid>
          <Typography variant='h6' gutterBottom>
            <strong>Biography</strong>
          </Typography>
          <Typography>
            {celebrityState.celebrity.biography}
          </Typography>
        </Grid>
      </Paper>
    </div>
  )
}

export default CelebrityHeader
