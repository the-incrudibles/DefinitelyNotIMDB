import React, { useState, useRef } from 'react'
import axios from 'axios'
import SearchContext from '../../utils/searchContext'
import SearchMovie from '../../components/SearchMovie'
import SearchTV from '../../components/SearchTV'
import SearchCelebrities from '../../components/SearchCelebrities'
import SearchResult from '../../utils/SearchResult.js'

const Search = _ => {
  const [searchState, setSearchState] = useState({
    searchArea: '',
    movies: [],
    shows: [],
    celebs: [],
    searchTerm: '',
    searchMovies: false,
    searchTV: false,
    searchCelebs: false,
    searchForCeleb: id => SearchResult.axiosForCeleb(id),
    searchForMovie: id => SearchResult.axiosForMovie(id),
    searchForShow: id => SearchResult.axiosForShow(id)
  })

  const searchTerm = useRef()

  searchState.handleSearchArea = event => {
    setSearchState({ ...searchState, searchArea: event.target.value })
  }

  searchState.buttonClick = e => {
    e.preventDefault()
    // if title
    if (searchState.searchArea === 'movie') {
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(({ data }) => {
          searchTerm.current.value = ''
          setSearchState({ ...searchState, movies: data.results, searchArea: '', searchMovies: true, searchTV: false, searchCelebs: false })
        })
        .catch(e => console.log(e))

      // if tv
    } else if (searchState.searchArea === 'tv') {
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(({ data }) => {
          searchTerm.current.value = ''
          setSearchState({ ...searchState, shows: data.results, searchArea: '', searchMovies: false, searchTV: true, searchCelebs: false })
        })
        .catch(e => console.log(e))

      // if celeb
    } else if (searchState.searchArea === 'celebrity') {
      axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(({ data }) => {
          searchTerm.current.value = ''
          setSearchState({ ...searchState, celebs: data.results, searchArea: '', searchMovies: false, searchTV: false, searchCelebs: true })
        })
        .catch(e => console.log(e))

      // if nothing selected
    } else if (searchState.searchArea === '') {
      console.log('wrong')
    }
  }

  return (
    <div className="containerDiv">
      <form>
        <input type='text' name='search' id='searchTerm' ref={searchTerm} />
        <br />
        <select
          value={searchState.searchArea}
          onChange={searchState.handleSearchArea}
          id='searchArea'
        >
          <option />
          <option value='movie'>Movie Search</option>
          <option value='tv'>TV Show Search</option>
          <option value='celebrity'>Celebrity Search</option>
        </select>
        <button id='someBtn' onClick={searchState.buttonClick}>Click me</button>
      </form>

      <div>
        <SearchContext.Provider value={searchState}>
          {
            searchState.searchMovies ? <SearchMovie /> : ''
          }
          {
            searchState.searchTV ? <SearchTV /> : ''
          }
          {
            searchState.searchCelebs ? <SearchCelebrities /> : ''
          }
        </SearchContext.Provider>
      </div>
    </div>
  )
}

export default Search
