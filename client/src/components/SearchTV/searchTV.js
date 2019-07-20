import React from 'react'
import SearchContext from '../../utils/searchContext'

const searchTV = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ shows }) => {
          shows.map(show => {
            console.log(show)
          })
        }
      }
    </SearchContext.Consumer>
  )
}

export default searchTV
