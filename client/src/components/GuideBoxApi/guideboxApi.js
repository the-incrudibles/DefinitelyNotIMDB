import React, { useState } from 'react'
import axios from 'axios'

const GuideBox = _ => {
  const [guideState, setGuideState] = useState({})

  guideState.getGuideBox = _ => {
    axios.get(`http://api-public.guidebox.com/v2/search?api_key=${process.env.REACT_APP_GUIDEBOX_APIKEY}&type=movie&field=id&id_type=themoviedb&query=${localStorage.getItem('movieID')}`)
      .then(data => {
        console.log(data)
      })
      .catch(e => console.log(e))
    //     axios.get(`http://api-public.guidebox.com/v2/search?type=movie&field=title&include_preorders=true&include_in_theaters=true&query=${searchTerm.current.value}&api_key=`)
    //       .then(({ data }) => {
    //         searchTerm.current.value = ''
    //         console.log(data)

    //         var preOrder = data.results.filter(
    //           e => e.pre_order === true
    //         )
    //         console.log(preOrder)
  }

  return (
    <h1>this is the guidebox thing</h1>
  )
}

export default GuideBox

// searchState.buttonClick = e => {
//   e.preventDefault()
//   // movie search
//   if (searchState.searchArea === 'movie' && searchTerm.current.value !== '') {
//     axios.get(`http://api-public.guidebox.com/v2/search?type=movie&field=title&include_preorders=true&include_in_theaters=true&query=${searchTerm.current.value}&api_key=${process.env.REACT_APP_GUIDEBOX_APIKEY}`)
//       .then(({ data }) => {
//         searchTerm.current.value = ''
//         console.log(data)

//         var preOrder = data.results.filter(
//           e => e.pre_order === true
//         )
//         console.log(preOrder)

//       })
//       .catch(e => console.log(e))

//     // show search
//   } else if (searchState.searchArea === 'tv' && searchTerm.current.value !== '') {
//     axios.get(`http://api-public.guidebox.com/v2/search?api_key=3228a71302f7780be2e65d84356cadc6d85b7a4e&type=show&field=title&query=${searchTerm.current.value}`)
//       .then(({ data }) => {
//         searchTerm.current.value = ''
//         console.log(data)
//       })
//       .catch(e => console.log(e))

//   }
// }
