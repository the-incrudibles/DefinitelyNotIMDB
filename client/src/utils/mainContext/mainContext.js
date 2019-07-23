import { createContext } from 'react'

const MainContext = createContext({
  articles: [],
  getArticles: _ => { }
})

export default MainContext
