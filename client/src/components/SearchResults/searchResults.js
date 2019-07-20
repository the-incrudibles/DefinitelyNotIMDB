import React from 'react'
import SearchContext from '../../utils/searchContext'
import SearchMovie from '../SearchMovie'

const searchResults = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ movies }) => (
          movies.map(movie =>
            <SearchMovie movie={movie} />
          )
        )
      }
    </SearchContext.Consumer>
  )
}

export default searchResults
