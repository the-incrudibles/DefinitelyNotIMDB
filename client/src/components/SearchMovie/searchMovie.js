import React from 'react'
import SearchContext from '../../utils/searchContext'
// import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const searchMovie = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ movies, searchForMovie }) => (
          movies.map(movie =>
            <Card key={movie.id} className="resultsDiv" onClick={_ => searchForMovie(movie.id)} >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {movie.genres}
                  </Typography>
                  <img className="resultsPoster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
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

export default searchMovie
