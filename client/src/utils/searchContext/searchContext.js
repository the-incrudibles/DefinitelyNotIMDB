import { createContext } from 'react'

const SearchContext = createContext({
  movies: [],
  shows: [],
  celebs: [],
  addCelebToDB: celeb => { }
})

export default SearchContext
