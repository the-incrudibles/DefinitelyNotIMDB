import React, { useState, useRef } from 'react'

const Search = _ => {
  const [searchState, setSearchState] = useState({
    searchArea: 'nothing',
    searchTerm: ''
  })

  const searchTerm = useRef()

  searchState.handleSearchArea = event => {
    setSearchState({ ...searchState, searchArea: event.target.value })
  }

  searchState.buttonClick = event => {
    event.preventDefault()
    console.log(searchState.searchArea)
    console.log(searchTerm.current.value)
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
        <h6>Movies/Celebrities/Genres</h6>
        <h6>Movies/Celebrities/Genres</h6>
        <h6>Movies/Celebrities/Genres</h6>
        <h6>Movies/Celebrities/Genres</h6>
      </div>
    </>
  )
}

export default Search
