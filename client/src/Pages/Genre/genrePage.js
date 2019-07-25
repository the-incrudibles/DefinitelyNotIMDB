import React, { useState, useEffect } from 'react'
import GenreResults from '../../components/GenreResults'

const GenrePage = _ => {
  const [genrePageState, setGenrePageState] = useState({
    genres: []
  })

  useEffect(_ => {
    
  },
    [])

  return (
    <>
      <h1>welcome to the page of the individual genre</h1>
      {/* I only had GenreResults render here so that I could see and test stuff with it */}
      <GenreResults />
    </>
  )
}

export default GenrePage
