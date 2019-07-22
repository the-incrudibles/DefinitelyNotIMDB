import { createContext } from 'react'

const SearchContext = createContext({
  movies: [],
  shows: [],
  celebs: [],
  searchForCeleb: celeb => { },
  searchForMovie: movie => { },
  searchForShow: show => { }
})

export default SearchContext
