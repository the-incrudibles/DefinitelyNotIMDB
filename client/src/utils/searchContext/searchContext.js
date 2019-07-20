import { createContext } from 'react'

const SearchContext = createContext({
  movies: [],
  shows: [],
  celebs: []
})

export default SearchContext
