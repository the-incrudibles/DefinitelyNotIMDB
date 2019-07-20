import React from 'react'
import SearchContext from '../../utils/searchContext'

const searchMovie = props => {
  return (
    <SearchContext.Consumer>
      {
        ({ movies }) => (
          movies.map(movie =>
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} style={{ width: '200px' }} />
            </div>
          )
        )
      }
    </SearchContext.Consumer>
  )
}

export default searchMovie
