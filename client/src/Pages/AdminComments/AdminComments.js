import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminComments = _ => {
  const [commentsState, setCommentsState] = useState({
    comments: []
  })

  commentsState.renderComents = _ => {
    axios.get('/flagged')
      .then(({ data }) => {
        setCommentsState({ ...commentsState, comments: data })
      })
      .catch(e => console.log(e))
  }

  useEffect(_ => {
    commentsState.renderComents()
  }, [])

  return (
    <>
      {
        commentsState.comments.map(comment => (
          <h1>Hello World</h1>
        ))
      }
    </>
  )
}

export default AdminComments
