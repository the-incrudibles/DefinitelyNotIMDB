import React, { useState, useEffect } from 'react'
// import tileData from './tileData.js'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  rootTwo: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}))

const MovieSlider = _ => {
  const [movieSlidersState, setMovieSlidersState] = useState([])
  const classes = useStyles()

  const renderMovie = _ => {
    axios.get(`https://api.themoviedb.org/3/movie/${parseInt(localStorage.getItem('celebID'))}/credits?api_key=${process.env.REACT_APP_TMDB_APIKEY}`)
      .then(({ data }) => {
        setMovieSlidersState(data.movie)
      })
      .catch(e => console.error(e))
  }
  useEffect(_ => {
    renderMovie()
  }, [])

  return (
    <div className={classes.rootTwo}>
      <GridList className={classes.gridList} cols={2.5}>
        {
          // change to tileData to casts
          movieSlidersState.map(movie => (
            <GridListTile key='' item>
              {movieSlidersState.data.movie.poster_path ? <img src={`https://image.tmdb.org/t/p/original${movieSlidersState.data.movie.poster_path}`} alt={''} /> : null}
              <Link to='/'>
                <GridListTileBar
                  title={movieSlidersState.data.title}
                  titlePosition='top'
                  actionPosition='left'
                  className={classes.titleBar}
                />
              </Link>
            </GridListTile>
          ))
        }
      </GridList>
    </div>
  )
}

export default MovieSlider
