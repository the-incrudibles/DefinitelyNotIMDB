import React from 'react'
import { Link } from 'react-router-dom'
import SearchContext from '../../utils/searchContext'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Placeholder from '../../images/placeholder_poster.jpg'

const SearchMovie = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ movies, searchForMovie }) => (
          movies.map(movie =>
            <Link to='/movie' className='cardLink' onClick={_ => {
              localStorage.setItem('movieID', movie.id)
              searchForMovie(movie.id)
            }}>
              <Card key={movie.id} className='resultsDiv'>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      {movie.title ? movie.title : movie.name}
                    </Typography>
                    {
                      movie.poster_path ? <img className='resultsPoster' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} /> : <img className='resultsPoster' src={Placeholder} alt={movie.title} />
                    }
                    <div className='cardTypography'>
                      <Typography variant='body2' color='textSecondary' component='p'>
                        {movie.overview ? <> {movie.overview.slice(0, 150)}<span>...</span> </> : null}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button className={movie.id} size='small' color='primary'>
                    More Info
                  </Button>
                </CardActions>
              </Card>
            </Link>
          )
        )
      }
    </SearchContext.Consumer >
  )
}

export default SearchMovie
