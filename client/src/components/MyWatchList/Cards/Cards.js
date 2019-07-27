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

  const handleDeleteButton = mID => {
    WatchlistContext.getWatchlist(localStorage.getItem('id'))
      .then(({ data }) => {
        let index = data.watchlist.indexOf(String(mID))
        let newWatchlist = data.watchlist.splice(index, 1)
        axios.put(`/user/${localStorage.getItem('id')}`, { watchlist: data.watchlist })
          .then(_ => <Link to='/watchlist' />)
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  }

  return (
    <CardContext.Consumer>
      {
        ({ watchlist }) => (
          watchlist.map(movie => (
            <Card className='resultsDiv'>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='h2'>
                    {movie.title}
                  </Typography>
                  <img className='resultsPoster' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                  <div className='cardTypography'>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      {movie.overview ? <> {movie.overview.slice(0, 150)}<span>...</span> </> : null}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to='/watchlist' >
                  <Button id={movie.id} size='small' color='primary' onClick={_ => handleDeleteButton(movie.id)}>

                    Delete
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))
        )
      }
    </CardContext.Consumer>
  )
}
export default Cards
