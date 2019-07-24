import React, { useState, useEffect } from 'react'
import GenreCalls from '../../utils/genreCalls.js'

const Genre = _ => {
  const [genreState, setGenreState] = useState({
    genres: [],
    searchForGenres: _ => {
      GenreCalls.getThoseGenres()
        .then(({ data }) => {
          setGenreState({ ...genreState, genres: data })
          console.log(data)
        })
        .catch(e => console.log(e))
    }
  })

  useEffect(_ => {
    genreState.searchForGenres()
  },
    [])

  return (
    <>
      {
        genreState.genres.map(genre => {
          return (
            <div id={genre.id}>
              <h3>{genre.id}</h3>
              <h2>{genre.name}</h2>
              <h6>{genre.picture_aws}</h6>
            </div>
          )
        })
      }
    </>
  )
}

export default Genre
