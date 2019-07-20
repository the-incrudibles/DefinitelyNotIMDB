import React from 'react'
// import SearchContext from '../../utils/searchContext'

const searchMovie = props => {
  return (
    <>
      <div key={props.movie.id}>
        <h1>{props.movie.title}</h1>
      </div>
    </>
  )
}

export default searchMovie
