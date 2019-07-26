import React, { useEffect, useState } from 'react'
// import MainContext from '../../utils/mainContext'
// import Article from '../../components/Article'
import MainArticles from '../../utils/MainArticles.js'
// import Typography from '@material-ui/core/Typography'

const ArticleInfo = _ => {
  const [mainState, setMainState] = useState({
    headline: '',
    summary: '',
    image: ''
  })

  const searchForArticle = _ => {
    MainArticles.getArticle(localStorage.getItem('articleID'))
      .then(article => {
        // setMainState({ ...mainState, headline: data.headline })
        console.log(article)
      })
      .catch(e => console.log(e))
  }

  useEffect(_ => {
    searchForArticle()
  }, [])

  return (
    <>
      hello
    </>
  )
}

export default ArticleInfo