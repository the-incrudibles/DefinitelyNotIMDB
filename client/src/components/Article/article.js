import React from 'react'
import MainContext from '../../utils/mainContext'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Article = _ => {
  return (
    <MainContext.Consumer>
      {
        ({ articles }) => (
          articles.map(article =>
            <Link to={
              localStorage.getItem('user') ? '/articleinfo' : 'login'
            }
              className='cardLink' key={article._id} onClick={_ => {
                localStorage.setItem('articleID', article._id)
              }}>
              <Card key={article._id} className='resultsDiv'>
                <CardActionArea>
                  <CardContent>
                    <img className='articlePoster' src={article.image} alt={article.headline} />
                    <div className="articleHeadline">
                      <Typography variant="body1" >
                        {article.headline}
                      </Typography>
                    </div>
                    <div className='articleTypography'>
                      <Typography variant='body2' color='textSecondary' component='p'> {article.summary.slice(0, 150)}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button className={article._id.toString()} size='small' color='primary'>
                    More Info
                  </Button>
                </CardActions>
              </Card>
            </Link>
          )
        )
      }
    </MainContext.Consumer>
  )
}

export default Article
