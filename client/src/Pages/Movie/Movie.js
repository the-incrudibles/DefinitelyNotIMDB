import React from 'react'
import MovieHeader from '../../components/MovieHeader'
import CastSlider from '../../components/CastSlider'
import MovieComments from '../../components/MovieComments'

const Movie = _ => {
  return (
    <div>
      <MovieHeader />
      {/* <GuideBox /> */}
      <CastSlider />
      <MovieComments />
    </div>
  )
}

export default Movie
