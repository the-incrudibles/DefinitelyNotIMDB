import React, { useState, useRef } from 'react'
import Axios from 'axios'

const Search = _ => {
  const [searchState, setSearchState] = useState({
    searchArea: ''
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
      Axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(data => {
          console.log(data.data)
          searchTerm.current.value = ''
          setSearchState({ ...searchState, searchArea: '' })
        })
        .catch(e => console.log(e))
    } else if (searchState.searchArea === 'celebrity') {
      // if celeb
      Axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(data => {
          console.log(data.data)
          searchTerm.current.value = ''
          setSearchState({ ...searchState, searchArea: '' })
        })
        .catch(e => console.log(e))
    } else if (searchState.searchArea === 'tv') {
      Axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_APIKEYY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(data => {
          console.log(data.data)
          searchTerm.current.value = ''
          setSearchState({ ...searchState, searchArea: '' })
        })
        .catch(e => console.log(e))
    }
  }

  return (
    <>
      <form>
        <input type='text' name='search' id='searchTerm' ref={searchTerm} />
        <br />
        <select
          value={searchState.searchArea}
          onChange={searchState.handleSearchArea}
          id='searchArea'
        >
          <option />
          <option value='movie'>Movie</option>
          <option value='celebrity'>Celebrity</option>
          <option value='tv'>TV Show</option>
        </select>
        <button id='someBtn' onClick={searchState.buttonClick}>Click me</button>
      </form>

      <div>
        <h1>movies go here</h1>
      </div>
    </>
  )
}

export default Search
