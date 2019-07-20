import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
import SearchContext from '../../utils/searchContext'

const searchCelebrities = _ => {
  // onClick
  // add to DB
  // Redirect to /celebrity

  return (
    <SearchContext.Consumer>
      {
        ({ celebs, addCelebToDB }) => (
          celebs.map(celeb =>
            <div key={celeb.id} onClick={addCelebToDB(celeb)} >
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
