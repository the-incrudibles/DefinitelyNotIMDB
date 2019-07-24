
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import Cards from './Cards'


const TopRatedHeader=_=> {
  // state={
  //   Image:[],
  //   Title:[]
  // }
  // render(){
  const [topRatedState,setTopRatedState]=useState(
    {topRatedImage:[],
    topRatedTitle:[],
    topRatedOverview:[]
    }
  )
  useEffect(_=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_APIKEY}`)
    .then(r => {
      let imageArr=[]
      let titleArr=[]
      let overviewArr=[]
      for(let i=0; i<20;i++)
      {
        imageArr.push('https://image.tmdb.org/t/p/original'+r.data.results[i].poster_path)
        titleArr.push(r.data.results[i].title)
        overviewArr.push(r.data.results[i].overview)
      }

      
      setTopRatedState({...topRatedState,topRatedImage:imageArr, topRatedTitle:titleArr})
    
    })
    .catch(e=>console.log('error:', e))
  }, [])

    
   
  
  return(
    <>
    {topRatedState.map(elem=>{
      console.log(elem)
      return(
      <Cards movie={elem} />
      )
    })}
    
     
    
    
    </>
  )
  
  }
export default TopRatedHeader
