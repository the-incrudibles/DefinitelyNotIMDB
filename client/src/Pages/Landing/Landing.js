import React, { useEffect, useState } from 'react'
import MainContext from '../../utils/mainContext'
import Article from '../../components/Article'
import MainArticles from '../../utils/MainArticles.js'
import Typography from '@material-ui/core/Typography'

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
  }, [])

  return (
    <>
      <div className="containerDiv">
        <div className='searchTypography'>
          <Typography variant='h6'>Welcome to Definitely Not IMDB. Check out the latest news here!</Typography>
        </div>
        {/* news articles go here */}
        <MainContext.Provider value={mainState}>
          <Article />
        </MainContext.Provider>
      </div>
    </>
  )
}

export default Landing
