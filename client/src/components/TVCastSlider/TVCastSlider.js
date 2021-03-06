import React, { useState, useEffect } from 'react'
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

const TVCastSlider = _ => {
  const [castSlidersState, setCastSlidersState] = useState([])
  const classes = useStyles()

  const renderTVCast = _ => {
    axios.get(`https://api.themoviedb.org/3/tv/${parseInt(localStorage.getItem('tvID'))}/credits?api_key=${process.env.REACT_APP_TMDB_APIKEY}`)
      .then(({ data }) => {
        setCastSlidersState(data.cast)
      })
      .catch(e => console.error(e))
  }
  useEffect(_ => {
    renderTVCast()
  }, [])

  return (
    <div className={classes.rootTwo}>
      <GridList className={classes.gridList} cols={2.5}>
        {
          castSlidersState.map(cast => (
            <GridListTile key='' item>
              {cast.profile_path ? <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={cast.name} /> : <img src='' alt='' />}
              <Link to='/celebrity' onClick={_ => {
                localStorage.setItem('celebID', cast.id)
              }}>
                <GridListTileBar
                  title={cast.name}
                  titlePosition='bottom'
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

export default TVCastSlider
