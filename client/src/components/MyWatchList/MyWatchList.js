import React, { useEffect ,useState} from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import CardActionArea from '@material-ui/core/CardActionArea'
import WatchlistContext from '../../utils/Watchlist.js'

const MyWatchList = _ => {
  const [watchListState, setwatchListState] = useState(
    {
      watchList: []
    }
  )
 
  useEffect(_ => {
    WatchlistContext.getWatchlist(localStorage.getItem('id'))
      .then(r => {
        setwatchListState({ ...watchListState,watchList: r.watchlist })
      })
      .catch(e => console.error(e))
  }, [])
  
  
  watchListState.addWatchList=movieId=>{
      let newWatchList=watchListState.watchList
      newWatchList.push(movieId)
      setwatchListState({ ...watchListState,watchList: newWatchList })
      WatchlistContext.addWatchlist()

  }
  watchListState.removeWatchList=userId=>{
    
  }
  // const cards = [1, 2, 3, 4, 5, 6]
  return (
    <React.Fragment>
      <CssBaseline />
      <div className='containerDiv'>
        <div className='searchTypography'>
          <Typography variant='h6'>Your Watchlist</Typography>
        </div>
        {
          watchListState.watchList.map(elem => {
            return (
              <>
            <Card className='resultsDiv'>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2'>
                    Title
                  </Typography>
                  <img className='resultsPoster' src={'https://image.tmdb.org/t/p/original/xRWht48C2V8XNfzvPehyClOvDni.jpg'} alt='title' />
                  <div className='cardTypography'>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced...
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' onClick={watchListState.addWatchList()}>
                  Add to Watchlist
                </Button>
                <Button size='small' color='primary' onClick={watchListState.removeWatchList()}>
                  Remove from Watchlist
                </Button>
              </CardActions>
            </Card >
            </>
          )
        })
      }
      </div>
    </React.Fragment>
  )
}

export default MyWatchList
