import { createContext } from 'react'

const MainContext = createContext({
  articles: [],
  searchForArticles: id => {}
})

export default MainContext
