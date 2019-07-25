import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GenreResultsCards from './GenreResultsCards'
import genreResultsContext from '../../utils/genreResultsContext'
import Typography from '@material-ui/core/Typography'

const GenreResults = _ => {

  return (
    <>
      <h1>this is the genre results page</h1>
    </>
  )

  //   const [genreResultsState, setGenreResultsState] = useState(
  //     {
  //       genreResultsMovie: []
  //     }
  //   )

  //   useEffect(_ => {
  //     // API link needs to be changed to grab all movies instead of ones that are now playing in theaters
  //     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}& language=en - US & sort_by=popularity.desc & include_adult=false & include_video=false & page=1 & with_genres=${ genre id goes here }`)
  //       .then(({ data }) => {
  //         let genreResultsArr = []
  //         data.results.map(elem => {
  //           genreResultsArr.push({
  //             imageArr: 'https://image.tmdb.org/t/p/original' + elem.poster_path,
  //             titleArr: elem.title,
  //             overviewArr: elem.overview,
  //             genreIdsArr: elem.genre_ids
  //           })
  //         })

  //         setGenreResultsState({ ...genreResultsState, genreResultsMovie: genreResultsArr })

  //       })
  //       .catch(e => console.log('error:', e))
  //   }, [])

  //   return (
  //     <div className="containerDiv">
  //       <div className='searchTypography'>
  //         <Typography variant='h6'>Genre Name Here</Typography>
  //       </div>
  //       {
  //         genreResultsState.genreResultsMovie.map(elem => {
  //           for (let i = 0; i < elem.genreIdsArr.length; i++) {
  //             // Condition to filter and display all movies that match the specified genre ID
  //             if (elem.genreIdsArr[i] === 35) {
  //               console.log(elem)
  //               return (
  //                 <>
  //                   <genreResultsContext.Provider value={elem}>
  //                     <GenreResultsCards />
  //                   </genreResultsContext.Provider>
  //                 </>
  //               )
  //             }
  //           }
  //         })
  //       }
  //     </div>
  //   )
}
export default GenreResults
