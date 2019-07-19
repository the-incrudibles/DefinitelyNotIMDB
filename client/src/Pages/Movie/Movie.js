import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieHeader from '../../components/MovieHeader'
import CastSlider from '../../components/CastSlider'

  const Movie = _ => {

    return(
        <div>
        <MovieHeader/>
        <CastSlider/>
    </div>
    )
  }

  export default Movie;
