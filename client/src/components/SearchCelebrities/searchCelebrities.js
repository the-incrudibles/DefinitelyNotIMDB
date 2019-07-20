import React from 'react'
import SearchContext from '../../utils/searchContext'

const searchCelebrities = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ celebs }) => {
          celebs.map(celeb => {
            console.log(celeb)
          })
        }
      }
    </SearchContext.Consumer>
  )
}

export default searchCelebrities
