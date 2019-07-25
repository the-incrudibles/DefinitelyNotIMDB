import { createContext } from 'react'

const SearchContext = createContext({
  searchArea: '',
  movies: [],
  shows: [],
  celebs: [],
  searchTerm: '',
  searchForCeleb: id => { },
  searchForMovie: id => { },
  searchForShow: id => { }
})

export default SearchContext
