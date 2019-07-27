import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GuideBox = _ => {
  const [guideState, setGuideState] = useState({
    GBID: '',
    hasRun: false
  })
  // axios.get(`http://api-public.guidebox.com/v2/movies?limit=10?api_key=${process.env.REACT_APP_GUIDEBOX_APIKEY}&limit=5`)
  // // axios.get(`http://api-public.guidebox.com/v2/movies/${parseInt(localStorage.getItem('movieID'))}/?include_links=true&api_key=${process.env.REACT_APP_GUIDEBOX_APIKEY}`)
  //   .then((r =>{
  //     console.log(r)
  //   }) 

  // useEffect(_ => {
  //   renderGuidebox()
  // }, [])

  // const getGuideBox = _ => {
  //   axios.get(`http://api-public.guidebox.com/v2/search?api_key=${process.env.REACT_APP_GUIDEBOX_APIKEY}&type=movie&field=id&id_type=themoviedb&query=${localStorage.getItem('movieID')}`)
  //     .then(({ data: movie }) => setGuideState({ ...guideState, GBID: movie.id, hasRun: true }))
  //     .catch(e => console.log(e))
  // }

  // useEffect(_ => {
  //   axios.get(`http://api-public.guidebox.com/v2/movies/${guideState.GBID}/?include_links=true&api_key=${process.env.REACT_APP_GUIDEBOX_APIKEY}`)
  //     .then(({ data }) => console.log(data))
  // }, [guideState.hasRun])

  return (
    <>
      <h1>this is the guidebox thing</h1>
    </>
  )
}

export default GuideBox
