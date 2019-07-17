<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';




const useStyles = makeStyles(theme => ({
    root: {
      padding: 25
    },
    card: {
        maxWidth: 350
    },
    media:{
        maxHeight: 200,
        maxWidth:200
    }
  }))


  const MoviePage = _ => {
    const [data, setData] = useState([])
    const classes = useStyles()


      useEffect(_ =>{
        axios.get('https://api.themoviedb.org/3/movie/399579?api_key=d12a96cdcfe3d81297140ffea9dca118&language=en-US')
        .then(r => {
            setData(r.data)
            console.log(r)
        })
    }, [])

      
    return(
        <div>
      <Paper className={classes.root}>
      <Grid container spacing={1}>
      <Grid item xs={6}>
      <Card className={classes.card}>
        <CardContent>
            <CardMedia
            component="img"
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Alita_Battle_Angel_%282019_poster%29.png/220px-Alita_Battle_Angel_%282019_poster%29.png"
            title="Alita"
            />
            </CardContent>
        </Card>        
        </Grid>
        <Grid item xs={6}>
            <Typography variant="h5" component="h3">
                {data.title}
            </Typography>
            <Typography component="p">
                Rating: {data.vote_average}
            </Typography>
            <Typography>
            <Fab color="default" aria-label="Add" className={classes.fab} size="small">
                <AddIcon />
            </Fab>
            </Typography>
               
        </Grid>
        <Typography variant="h6" gutterBottom>
        <strong>Overview</strong>
      </Typography>
        <Typography>
                {data.overview}
            </Typography> 
        </Grid>
      </Paper>
    </div>
    )
  }

  export default MoviePage;
=======
import React from 'react'

const Movie = _ => {
  return (
    <>
    </>
  )
}

export default Movie
>>>>>>> master
