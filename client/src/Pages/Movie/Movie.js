import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieHeader from '../../components/MovieHeader'
import CastSlider from '../../components/CastSlider'
import MovieComments from '../../components/MovieComments'
import AddMovieComments from '../../components/AddMovieComments'


  const Movie = _ => {

    return(
        <div>
        <MovieHeader/>
        <CastSlider/>
        <MovieComments/>
    </div>
  )
}

export default Movie
