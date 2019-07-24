import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import axios from 'axios'
import CardActionArea from '@material-ui/core/CardActionArea'
import Watchlist from '../../utils/Watchlist.js'


const MyWatchList = _ => {
  const [watchlistState, setWatchlistState] = useState({
    movies: []
  })

  // useEffect(_ => {
  //   Watchlist.populate()
  // }, [])

  useEffect(_ => {
    axios.get('https://api.themoviedb.org/3/movie/399579?api_key=d12a96cdcfe3d81297140ffea9dca118&language=en-US')
      .then(({ data: movie }) => {
        console.log(movie.poster_path)
      })
      .catch(e => console.error(e))
  }, [])

  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2)
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '56.25%' // 16:9
    },
    cardContent: {
      flexGrow: 1
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }))

  const classes = useStyles()

  const cards = [1, 2, 3, 4, 5, 6]
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="containerDiv">
        <div className='searchTypography'>
          <Typography variant='h6'>Your Watchlist</Typography>
        </div>
        {
          cards.map(card => (
            <Card className='resultsDiv'>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Title
                </Typography>
                  <img className="resultsPoster" src={"https://image.tmdb.org/t/p/original/xRWht48C2V8XNfzvPehyClOvDni.jpg"} alt="title" />
                  <div className="cardTypography">
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced...
                  </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  More Info
              </Button>
                <Button size='small' color='primary'>
                  Remove
              </Button>
              </CardActions>
            </Card >
          ))
        }
      </div>
      {/* <AppBar position='relative' /> */}
      {/* <main> */}
      {/* Hero unit */}
      {/* <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography variant='h4' align='center' color='textSecondary' paragraph>
              My Watch List
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'> */}
      {/* End hero unit */}
      {/* <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://image.tmdb.org/t/p/original/xRWht48C2V8XNfzvPehyClOvDni.jpg'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Title
                    </Typography>
                    <Typography>
                      Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main> */}
    </React.Fragment>
  )
}

export default MyWatchList
