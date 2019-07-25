import React, { useState, useEffect } from 'react'
import GenreCalls from '../../utils/genreCalls.js'
// import GenreResults from '../../components/GenreResults'

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
    },
    hasChosenGenre: false
  })

  useEffect(_ => {
    genreState.searchForGenres()
  },
    [])

  useEffect(_ => {
    genreState.searchForGenres()
  },
    [])

  return (
    <>
      {
        genreState.genres.map(genre => {
          return (
            <div id={genre.id} onClick={_ => {
              localStorage.setItem('genreID', genre.id)
              console.log('check local storage')
            }}>
              <h3>{genre.id}</h3>
              <h2>{genre.name}</h2>
              <h6>{genre.picture_aws}</h6>
            </div>
          )
        })
      }
      {/* I only had GenreResults render here so that I could see and test stuff with it */}
      {/* <GenreResults /> */}
    </>
  )
}

export default Genre
