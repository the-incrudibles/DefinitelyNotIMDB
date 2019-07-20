import React from 'react'
import SearchContext from '../../utils/searchContext'

const searchCelebrities = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ celebs }) => (
          celebs.map(celeb =>
            <div key={celeb.id}>
              <h1>{celeb.name}</h1>
              <img src={`https://image.tmdb.org/t/p/original${celeb.profile_path}`} alt={celeb.name} style={{ width: '200px' }} />
            </div>
          )
        )
      }
    </SearchContext.Consumer>
  )
}

export default searchCelebrities
