import React from 'react'
import { Link } from 'react-router-dom'
import SearchContext from '../../utils/searchContext'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const searchCelebrities = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ celebs, searchForCeleb }) => (
          celebs.map(celeb =>
            <Link to='/celebrity' className='cardLink' onClick={_ => {
              localStorage.setItem('celebID', celeb.id)
              searchForCeleb(celeb.id)
            }}>
              <Card key={celeb.id} className='resultsDiv'>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      {celeb.name}
                    </Typography>
                    {
                      celeb.profile_path ? <img className='resultsPoster' src={`https://image.tmdb.org/t/p/original${celeb.profile_path}`} alt={celeb.name} /> : <img className='resultsPoster' src={'http://wiki.bdtnrm.org.au/images/8/8d/Empty_profile.jpg'} alt={celeb.name} />
                    }
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
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

export default searchCelebrities
