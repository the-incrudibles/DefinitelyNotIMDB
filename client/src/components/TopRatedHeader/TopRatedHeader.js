import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import Cards from './Cards'
import Grid from '@material-ui/core/Grid'
import topRatedContext from '../../utils/topRatedContext'



const TopRatedHeader=_=> {
  
  const [topRatedState,setTopRatedState]=useState(
    {topRatedMovie:[],
    
    }
  )
  useEffect(_=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_APIKEY}`)
    .then(r => {
     
      let topMovieArr=[]
      r.data.results.map(elem=>
      {
        console.log(elem)

        topMovieArr.push({
          imageArr:'https://image.tmdb.org/t/p/original'+elem.poster_path,
          titleArr:elem.title,
          overviewArr:elem.overview
        })
      }
      
      setTopRatedState({...topRatedState,topRatedMovie:topMovieArr})
    
    })
    .catch(e=>console.log('error:', e))
  }, [])

    
   
  
  return(
    <>
    <Grid container>
    {topRatedState.topRatedMovie.map(elem=>{
      console.log(elem)
      return(
      <>
      <Grid item xs={3} sm={3}>
        <topRatedContext.Provider value={elem}>
      <Cards />
      </topRatedContext.Provider>
      </Grid>
      </>
      )
    })}
    </Grid>
     
    
    
    </>
  )
  
  }
export default TopRatedHeader
