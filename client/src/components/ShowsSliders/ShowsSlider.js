import React, { useState, useEffect } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Placeholder from '../../images/placeholder_poster.jpg'

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
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}))

const ShowsSlider = _ => {
  const [showsSlidersState, setShowsSlidersState] = useState([])
  const classes = useStyles()

  const renderShows = _ => {
    axios.get(`https://api.themoviedb.org/3/person/${parseInt(localStorage.getItem('celebID'))}/combined_credits?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
      .then(({ data }) => {
        setShowsSlidersState(data.cast)
        // console.log(data.cast)
      })
      .catch(e => console.error(e))
  }
  useEffect(_ => {
    renderShows()
  }, [])

  return (
    <div className={classes.rootTwo}>
      <GridList className={classes.gridList} cols={2.5}>
        {
          showsSlidersState.map(show => (
            <GridListTile key='' item>
              {
                show.poster_path ? <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt={show.name} /> : <img src={Placeholder} alt={show.name} />
              }
              {
                show.media_type === 'tv'
                  ? <Link to='/tvshow' onClick={_ => {
                    localStorage.setItem('tvID', show.id)
                  }}>
                    <GridListTileBar
                      title={
                        show.character ? `as ${show.character}` : null
                      }
                      titlePosition='bottom'
                      actionPosition='left'
                      className={classes.titleBar}
                    />
                  </Link>
                  : <Link to='/movie' onClick={_ => {
                    localStorage.setItem('movieID', show.id)
                  }}>
                    <GridListTileBar
                      title={
                        show.character ? `as ${show.character}` : null
                      }
                      titlePosition='bottom'
                      actionPosition='left'
                      className={classes.titleBar}
                    />
                  </Link>
              }
            </GridListTile>
          ))
        }
      </GridList>
    </div >
  )
}

export default ShowsSlider
