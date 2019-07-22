import React from 'react'
import SearchContext from '../../utils/searchContext'

const searchTV = _ => {
  return (
    <SearchContext.Consumer>
      {
        ({ shows, searchForShow }) => (
          shows.map(show =>
            <div key={show.id} onClick={_ => searchForShow(show.id)}>
              <h1>{show.name}</h1>
              <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt={show.title} style={{ width: '200px' }} />
            </div>
          )
        )
      }
    </SearchContext.Consumer>
  )
}

export default searchTV
