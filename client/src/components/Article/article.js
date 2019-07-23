import React from 'react'
import MainContext from '../../utils/mainContext'

const Article = _ => {
  return (
    <MainContext.Consumer>
      {
        // console.log(article)
        ({ articles }) => (
          articles.map(article =>
            <div key={article.id} >
              <h6>{article.picture}</h6>
              <h2>{article.title}</h2>
              <h5>{article.body}</h5>
            </div>
          )
        )
      }
    </MainContext.Consumer>
  )
}

export default Article
