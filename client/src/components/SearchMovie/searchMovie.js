import React from 'react'
import SearchContext from '../../utils/searchContext'

const searchMovie = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ movies }) => {
          movies.map(movie => {
            console.log(movie)
          })
        }
      }
    </SearchContext.Consumer>
  )
}

export default searchMovie
