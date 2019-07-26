import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MainArticles from '../../utils/MainArticles.js'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import GuideBox from '../../components/GuideBoxApi'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 15,
    height: "100%"
  },
  card: {
    maxWidth: 350
  },
  media: {
    maxHeight: 200,
    maxWidth: 200
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  gridHeight: {
    height: "100%"
  }
}))

const ArticleInfo = _ => {
  const classes = useStyles()
  const [mainState, setMainState] = useState({
    headline: '',
    summary: '',
    image: ''
  })

  const searchForArticle = _ => {
    MainArticles.getArticle(localStorage.getItem('articleID'))
      .then(({ data }) => {
        setMainState({ ...mainState, headline: data.headline, summary: data.summary, image: data.image })
      })
      .catch(e => console.log(e))
  }

  useEffect(_ => {
    searchForArticle()
  }, [])

  return (
    <>
      <div>
        <Paper className={classes.root}>
          <div>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <img className='movieImg' src={mainState.image} alt='' />
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6' component='h3' className="movieHeaderText">
                  {mainState.headline}
                </Typography>
              </Grid>
              <Typography variant='h6' gutterBottom>
                <strong>Here's the scoop:</strong>
              </Typography>
              <Typography>
                {mainState.summary}
              </Typography>
            </Grid>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default ArticleInfo