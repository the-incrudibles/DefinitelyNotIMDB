import React, { useState, useRef } from 'react'
import axios from 'axios'

const Search = _ => {
  const [searchState, setSearchState] = useState({
    searchArea: '',
    movies: [],
    shows: [],
    celebs: []
  })

  const searchTerm = useRef()

  searchState.handleSearchArea = event => {
    setSearchState({ ...searchState, searchArea: event.target.value })
  }

  searchState.buttonClick = event => {
    event.preventDefault()

    // if title
    if (searchState.searchArea === 'title') {
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(({ data }) => {
          let movieArr = data.results
          setSearchState({ ...searchState, movies: movieArr })
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
            .then(({ data }) => {
              searchTerm.current.value = ''
              setSearchState({ ...searchState, shows: data.results, searchArea: '' })
            })
            .catch(e => console.log(e))
        })
        .catch(e => console.log(e))

      // if celeb
    } else if (searchState.searchArea === 'celebrity') {
      axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(data => {
          console.log(data.data)
          searchTerm.current.value = ''
          setSearchState({ ...searchState, searchArea: '' })
        })
        .catch(e => console.log(e))

      // if nothing selected
    } else if (searchState.searchArea === '') {
      console.log('wrong')
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
          <option value='title'>Title Search</option>
          <option value='celebrity'>Celebrity Search</option>
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
