import React, { useEffect, useState } from 'react'
import MainContext from '../../utils/mainContext'
import Article from '../../components/Article'
import MainArticles from '../../utils/MainArticles.js'

const Landing = _ => {
  const [mainState, setMainState] = useState({
    articles: [],
    searchForArticles: _ => {
      MainArticles.getArticles()
        .then(({ data: articles }) => {
          console.log(articles)
        })
        .catch(e => console.log(e))
    }
  })

  // on page load, grab all the articles and display on the page
  useEffect(_ => {
    mainState.searchForArticles()
  },
    [])

  return (
    <>
      <div>
        <h1>Welcome to definitely not IMDB</h1>
        {/* news stories go here */}
        <MainContext.Provider value={mainState}>
          <Article />
        </MainContext.Provider>
      </div>
    </>
  )
}

export default Landing
