import React, {useState, useEffect} from 'react'
import tileData from './tileData.js'
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

const CastSlider = _ => {
  const [castSlidersState, setCastSlidersState] = useState([])
  const classes = useStyles()

  // // https://api.themoviedb.org/3/movie/399579/credits?api_key=d12a96cdcfe3d81297140ffea9dca118
    // axios.get(`/movies/${'id'}`)

  const renderCast= _ => {
    axios.get(`https://api.themoviedb.org/3/movie/${localStorage.getItem('movieID')}/credits?api_key=d12a96cdcfe3d81297140ffea9dca118`)
      .then(({data}) =>{
        setCastSlidersState(data.cast)
      })
      .catch(e => console.error(e))
  }
useEffect(_=>{
  renderCast()
},[])
  console.log(castSlidersState)

  return (
    <div className={classes.rootTwo}>
      <GridList className={classes.gridList} cols={2.5}>
        {
          // change to tileData to casts
          castSlidersState.map(cast => (
          <GridListTile key='' item>
            {cast.profile_path ? <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={''} /> : <img src="" />}
            <Link to='/'>
              <GridListTileBar
                title={cast.name}
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

export default CastSlider
