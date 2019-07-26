import React, { useState } from 'react'
import Flag from '@material-ui/icons/Flag'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  flagNotReport: {
    color: 'black'
  },
  flagIsReport: {
    color: 'red'
  }

}))
const ReportMovieCommentButton = _ => {
  const [reportCommentState, setReportCommentState] = useState({
    isReport: false
  })
  const classes = useStyles()

  const handleReportComment = _ => {
    axios.put(`/comment/${'id'}`, {
      flagged: true
    })
      .then(_ => {
        console.log('success')
        setReportCommentState({ ...reportCommentState, isReport:true })
      })
      .catch(e => console.log('not updated'))
  }

  return (
        <>

          <div>
            {
              reportCommentState.isReport === false
                ? <IconButton onClick={handleReportComment}>
                  <Flag className={classes.flagNotReport} />
                </IconButton>
                : <IconButton onClick={handleReportComment}>
                  <Flag className={classes.flagIsReport} />
                </IconButton>
            }
          </div>
        </>
  )
}

export default ReportMovieCommentButton
