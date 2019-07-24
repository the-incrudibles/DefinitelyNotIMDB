
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import Cards from './Cards'
import Grid from '@material-ui/core/Grid'



const TopRatedHeader=_=> {
  // state={
  //   Image:[],
  //   Title:[]
  // }
  // render(){
  const [topRatedState,setTopRatedState]=useState(
    {topRatedMovie:[],
    
    }
  )
  useEffect(_=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_APIKEY}`)
    .then(r => {
     
      let topMovieArr=[]
      for(let i=0; i<20;i++)
      {
        topMovieArr.push({
          imageArr:'https://image.tmdb.org/t/p/original'+r.data.results[i].poster_path,
          titleArr:r.data.results[i].title,
          overviewArr:r.data.results[i].overview
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
      <Cards movie={elem} />
      </Grid>
      </>
      )
    })}
    </Grid>
     
    
    
    </>
  )
  
  }
export default TopRatedHeader
