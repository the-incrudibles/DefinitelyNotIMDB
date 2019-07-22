
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import Cards from './Cards'


class TopRatedHeader extends Component {
  state={
    Image:[],
    Title:[]
  }
  render(){
  return(
    <>
    <Cards movie={this.state}>
      
    </Cards>
    </>
  )
  }
   handlefetch=_=>{
    // dotenv.config()
    //  console.log(`${process.env.REACT_APP_TMDB_APIKEY}`)
    axios.get(`https://api.themoviedb.org/3/movie/399579?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&sort_by=popularity.desc`)
    .then(r => {
      let imageArr=[]
      let titleArr=[]
      for(let i=0;i<10;i++)
      {
        imageArr.push(r.data.poster_path)
        titleArr.push(r.data.title)
       

      }
      this.setState({image:imageArr})
      this.setState({title:titleArr})
      console.log(this.state.Image)
    })
    .catch(e=>console.log(e))

   }
  }  
export default TopRatedHeader
