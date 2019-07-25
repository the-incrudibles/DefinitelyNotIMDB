import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GenreCalls from '../../utils/genreCalls.js'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Placeholder from '../../images/placeholder_poster.jpg'

const Genre = _ => {
  const [genreState, setGenreState] = useState({
    genres: [],
    searchForGenres: _ => {
      GenreCalls.getThoseGenres()
        .then(({ data }) => {
          setGenreState({ ...genreState, genres: data })
        })
        .catch(e => console.log(e))
    },
    hasChosenGenre: false
  })

  useEffect(_ => {
    genreState.searchForGenres()
  }, [])

  return (
    <>
      {
        genreState.genres.map(genre => {
          console.log(genre)
          return (
            <Link to='/genre' className='cardLink' onClick={_ => {
              localStorage.setItem('genreID', genre.id)
              localStorage.setItem('genreName', genre.name)
            }}>
              <Card key={genre.id} className='resultsDiv'>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      {genre.name}
                    </Typography>
                    {
                      genre.picture_aws ? <img className='resultsPoster' src={genre.picture_aws} alt={genre.name} /> : <img className='resultsPoster' src={Placeholder} alt={genre.name} />
                    }
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          )
        })
      }
    </>
  )
}

export default Genre
