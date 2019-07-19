import React from 'react'
import tileData from './tileData.js'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    rootTwo: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      }
  }))


const CastSlider = _ =>{
    const classes = useStyles()

    return(
    <div className={classes.rootTwo}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.name} />
            <Link to ="/">
            <GridListTileBar
              title={tile.name}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
            </Link>
          </GridListTile>
        ))}
      </GridList>
      </div>
    )
}

export default CastSlider