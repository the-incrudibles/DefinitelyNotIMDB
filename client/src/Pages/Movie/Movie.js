import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieHeader from '../../components/MovieHeader'
import CastSlider from '../../components/CastSlider'
import MovieComments from '../../components/MovieComments'

  const Movie = _ => {

    return(
        <div>
        <MovieHeader/>
        <CastSlider/>
        <AddMovieComments/>
        <MovieComments/>
    </div>
    )
  }

  export default Movie;
