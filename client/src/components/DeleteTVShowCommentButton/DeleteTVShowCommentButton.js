import React, { useState } from 'react'
import axios from 'axios'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  isNotAdmin: {
    paddingTop: 12,
    display: 'none'
  },
  isAdmin: {
    paddingTop: 12,
    display: 'block'
  }

}))

const DeleteTVShowCommentButton = _ => {
  const [isAdminState, setIsAdmindState] = useState({
    isAdmin: false
  })
  const classes = useStyles()
  const handleDeleteCommentButton = event => {
    // console.log(event.target)
    axios.delete(`/tv/comment/id`)
      .then(_ => 
        console.log('deleted!')
        )
      .catch(e => console.error('not deleted'))
  }
  const checkIsAdmin = _ => {
    let getAdmin = localStorage.getItem('admin', isAdminState)
    setIsAdmindState({ ...isAdminState, isAdmin: getAdmin })
  }
  return (
    <>
      {
        checkIsAdmin.isAdmin === 'admin'
          ? <IconButton className={classes.isAdmin} size='small' aria-label='Delete' onClick={handleDeleteCommentButton}>
            <DeleteIcon />
          </IconButton>
          : <IconButton className={classes.isNotAdmin} size='small' aria-label='Delete' >
            <DeleteIcon />
          </IconButton>
      }
    </>
  )
}

export default DeleteTVShowCommentButton
