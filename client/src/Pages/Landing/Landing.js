import React, { useEffect, useState } from 'react'
import MainContext from '../../utils/mainContext'
import Article from '../../components/Article'
import MainArticles from '../../utils/MainArticles.js'

const Landing = _ => {
  const [mainState, setMainState] = useState({
    articles: []
  })

  const searchForArticles = _ => {
    MainArticles.getArticles()
      .then(({ data: articles }) => {
        setMainState({ ...mainState, articles: articles })
      })
      .catch(e => console.log(e))
  }

  useEffect(_ => {
    searchForArticles()
  },)

  return (
    <>
      <div>
        <h1>Welcome to definitely not IMDB</h1>
        {/* news articles go here */}
        <MainContext.Provider value={mainState}>
          <Article />
        </MainContext.Provider>
      </div>
    </>
  )
}

export default Landing
