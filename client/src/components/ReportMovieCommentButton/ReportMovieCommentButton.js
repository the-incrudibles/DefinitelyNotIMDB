import React, { useState } from 'react'
import Flag from '@material-ui/icons/Flag'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'

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
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function confirmReport() {
    setOpen(false);

    setReportCommentState({ ...reportCommentState, isReport: true })
    reportCommentState.handleReportComment()
  }

  function handleClose() {
    setOpen(false);
  }


  const [reportCommentState, setReportCommentState] = useState({
    isReport: false
  })
  const classes = useStyles()
// calling "e" was breaking the function

  reportCommentState.handleReportComment = e=>{
    console.log(e.target.id)
    axios.put(`/comment/${parseInt(e.target.id)}`,{
      flagged: true
    })
        .then(_=>{
            console.log('success')
            setReportCommentState({...reportCommentState, isReport:true})
        })
        .catch(e => console.log('not updated'))
  }

  return (
    <>
      <div>
        {
          reportCommentState.isReport === false
            ? <IconButton onClick={handleClickOpen}>
              <Flag className={classes.flagNotReport} />
            </IconButton>
            : <IconButton onClick={handleClickOpen}>
              <Flag className={classes.flagIsReport} />
            </IconButton>
        }
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Report this comment?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please only report comments if you feel as though they violate our community guidelines. Disagreeing with someone's opinion is not a reason to report!
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={confirmReport} color="primary">
              Report
          </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Cancel
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default ReportMovieCommentButton
