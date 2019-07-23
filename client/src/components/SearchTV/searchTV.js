import React from 'react'
import SearchContext from '../../utils/searchContext'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Placeholder from '../../images/placeholder_poster.jpg'

const searchTV = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ shows, searchForShow }) => (
          shows.map(show =>
            <Card key={show.id} onClick={_ => searchForShow(show.id)} className='resultsDiv'>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {show.name}
                  </Typography>
                  {
                    show.poster_path ? <img className="resultsPoster" src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt={show.title} /> : <img className="resultsPoster" src={Placeholder} alt={show.title} />
                  }
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  More Info
                </Button>
              </CardActions>
            </Card>
          )
        )
      }
    </SearchContext.Consumer>
  )
}

export default searchTV
