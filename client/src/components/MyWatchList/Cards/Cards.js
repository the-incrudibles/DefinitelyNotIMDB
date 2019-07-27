import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardContext from '../../../utils/CardContext'
import WatchlistContext from '../../../utils/Watchlist.js'



const Cards = _ => {
  const movie = useContext(CardContext)

  const handleDeleteButton = _ => {
    WatchlistContext.getWatchlist(localStorage.getItem('id'))
      .then(({ data }) => {
        let watchListArr = data[0].watchlist
        let removeIndex = watchListArr.indexOf(movie.id)
        watchListArr.splice(removeIndex, 1)
        axios.put(`/user/${localStorage.getItem('id')}`, { watchlist: watchListArr })
          .then(_ => window.location.reload())
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  }

  return (
    <Card key={movie.id} className='resultsDiv'>
      <Link to='/movie' className='cardLink' key={movie.id} onClick={_ => {
        localStorage.setItem('movieID', movie.id)
      }}>
        <CardActionArea>
          <CardContent>
            <Typography className="regularTextColor" gutterBottom variant='h6' component='h2'>
              {movie.title}
            </Typography>
            <img className='resultsPoster' src={movie.posterURL} alt={movie.title} />
            <div className='cardTypography'>
              <Typography variant='body2' color='textSecondary' component='p'>
                {movie.overview ? <> {movie.overview.slice(0, 150)}<span>...</span> </> : null}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button id={movie.id} size='small' color='primary' onClick={_ => {
            WatchlistContext.getWatchlist(localStorage.getItem('id'))
              .then(({ data }) => {
                let watchListArr = data[0].watchlist
                let removeIndex = watchListArr.indexOf(movie.id)
                console.log(watchListArr)
                watchListArr.splice(removeIndex, 1)
                console.log(watchListArr)
                axios.put(`/user/${localStorage.getItem('id')}`, { watchlist: watchListArr })
                  .then(_ => console.log(watchListArr))
                  .catch(e => console.log(e))
              })
              .catch(e => console.log(e))
          }}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Link>
  )
}
export default Cards
