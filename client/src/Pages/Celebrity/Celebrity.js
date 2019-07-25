import React, { useState, useEffect } from 'react'
import CelebrityHeader from '../../components/CelebrityHeader'
import MovieSlider from '../../components/MovieSlider'
import CelebrityComments from '../../components/CelebrityComments'
import AddCelebrityComments from '../../components/AddMovieComments'

const Celebrity = _ => {
  return (
    <div>
      <CelebrityHeader />
      {/* <MovieSlider /> */}
      <CelebrityComments />
    </div>
  )
}

export default Celebrity
