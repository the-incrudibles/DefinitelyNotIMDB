import React, { useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import genreResultsContext from '../../utils/genreResultsContext'

const GenreResultsCards = _ => {
  const movie = useContext(genreResultsContext)
  return (
    <Card className='resultsDiv'>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            {movie.titleArr}
          </Typography>
          <img className='resultsPoster' src={movie.imageArr} alt={movie.titleArr} />
          <div className='cardTypography'>
            <Typography variant='body2' color='textSecondary' component='p'>
              {movie.overviewArr ? <> {movie.overviewArr.slice(0, 150)}<span>...</span> </> : null}
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
  )
}
export default GenreResultsCards
