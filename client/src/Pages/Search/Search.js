import React, { useState, useRef } from 'react'
import Axios from 'axios';

const Search = _ => {
  const [searchState, setSearchState] = useState({
    searchArea: 'nothing'
  })

  const searchTerm = useRef()

  searchState.handleSearchArea = event => {
    setSearchState({ ...searchState, searchArea: event.target.value })
  }

  searchState.buttonClick = event => {
    event.preventDefault()
    console.log(searchState.searchArea)
    console.log(searchTerm.current.value)
    // axios stuff here
    // if movie
    if (searchState.searchArea === 'movie') {
      Axios.get(`https://api.themoviedb.org/3/search/multi?api_key=d12a96cdcfe3d81297140ffea9dca118&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(data => {
          console.log(data.data)
        })
        .catch(e => console.log(e))
    }
    // if celeb
    // if genre
  }

  return (
    <>
      <input type='text' name='search' id='searchTerm' ref={searchTerm} />
      <br />
      <form>
        <select
          value={searchState.searchArea}
          onChange={searchState.handleSearchArea}
          id='searchArea'
        >
          <option />
          <option value='movie'>Movie</option>
          <option value='celebrity'>Celebrity</option>
          <option value='genre'>Genre</option>
        </select>
        <button id='someBtn' onClick={searchState.buttonClick}>Click me</button>
      </form>

      <div>

      </div>
    </>
  )
}

export default Search
