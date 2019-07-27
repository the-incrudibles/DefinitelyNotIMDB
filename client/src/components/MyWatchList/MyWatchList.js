import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import CardActionArea from '@material-ui/core/CardActionArea'
import Watchlist from '../../utils/Watchlist.js'

const MyWatchList = _ => {

  const [watchlistState, setWatchlistState] = useState({
    movies: []
  })

  useEffect(_ => {
    Watchlist.getWatchlist()
      .then(({ data }) => {
        let movies = data
        console.log(movies)
        setWatchlistState(...watchlistState, movies)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <div className='containerDiv'>
        <div className='searchTypography'>
          <Typography variant='h6'>Your Watchlist</Typography>
        </div>
        {
          watchlistState.movies ?
            watchlistState.movies.map(movie => (
              <Card className='resultsDiv'>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      {movie.title}
                    </Typography>
                    <img className='resultsPoster' src={'https://image.tmdb.org/t/p/original/xRWht48C2V8XNfzvPehyClOvDni.jpg'} alt='title' />
                    <div className='cardTypography'>
                      <Typography variant='body2' color='textSecondary' component='p'>
                        {movie.overview}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    More Info
                  </Button>
                  <Button size='small' color='primary' id={movie.id} onclick={watchlistState.handleDeleteFromWatchlist}>
                    Remove
                  </Button>
                </CardActions>
              </Card >
            )) : ''
        }
      </div>
    </React.Fragment>
  )
}

export default MyWatchList
