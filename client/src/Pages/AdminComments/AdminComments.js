import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminComments = _ => {
  const [commentsState, setCommentsState] = useState({
    comments: []
  })

  commentsState.renderComents = _ => {
    axios.get('/comments')
      .then(({ data }) => {
        setCommentsState({ ...commentsState, comments: data })
      })
  }

  // commentsState.deleteComment = _ => {
  //   axios.delete(`/comments/${id}`)
  // }

  useEffect(_ => {
    commentsState.renderComents()
  }, [])

  return (
    <>
      {
        commentsState.comments.map(comment => (!comment.flagged ? <h1>Hello</h1> : null))
      }
    </>
  )
}

export default AdminComments
