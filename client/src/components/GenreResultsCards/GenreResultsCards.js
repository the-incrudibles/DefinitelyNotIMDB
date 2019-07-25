import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import Placeholder from '../../images/placeholder_poster.jpg'
import genreResultsContext from '../../utils/genreResultsContext'
import SearchResult from '../../utils/SearchResult.js'

const GenreResultsCards = _ => {
  return (
    <genreResultsContext.Consumer>
      {
        ({ genreResultsMovies }) => (
          genreResultsMovies.map(movie =>
            <Link to='/movie' className='cardLink' onClick={_ => {
              localStorage.setItem('movieID', movie.id)
              SearchResult.axiosForMovie(movie.id)
            }}>
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
                  <Button size='small' color='primary'>
                    More Info
                  </Button>
                </CardActions>
              </Card >
            </Link>
          )
        )
      }
    </genreResultsContext.Consumer >
  )
}
export default GenreResultsCards
