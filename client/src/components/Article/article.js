import React from 'react'
import MainContext from '../../utils/mainContext'

const Article = _ => {
  return (
    <MainContext.Consumer>
      {
        ({ articles }) => (
          articles.map(article =>
            //   <div key={article.id} >
            //     <h1>{article.picture}</h1>
            //     <h1>{article.title}</h1>
            //     <h1>{article.body}</h1>
            //   </div>
            console.log(article)
          )
        )
      }
    </MainContext.Consumer>
  )
}

export default Article
