import React, { useContext } from 'react'
import axios from 'axios'
// import Card from './Card'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import topRatedContext from '../../../utils/topRatedContext'


const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

const Cards = _ => {
  const classes = useStyles()
  const movie = useContext(topRatedContext)
  console.log(movie[0])
  return (
    <Card className='resultsDiv'>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {movie.titleArr}
          </Typography>
          <img className="resultsPoster" src={movie.imageArr} alt={movie.titleArr} />
          <div className="cardTypography">
            <Typography variant='body2' color='textSecondary' component='p'>
              {movie.overviewArr ? <> {movie.overviewArr.slice(0, 100)}<span>...</span> </> : null}
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
export default Cards
