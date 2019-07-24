import React, { useState, useEffect } from 'react'
import Flag from '@material-ui/icons/Flag'
import axios from 'axios'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  flagColor: {
    color: 'red'
  }
}))
const ReportButton = _ => {
  const [reportComment, setReportComment] = useState([])
  const classes = useStyles()

  const handleReportComment = _ => {
    axios.put(`/movie/`)
      .then(_ => {
        console.log('updated!')
      })
      .catch(e => console.log('not updated'))
  }

  return (
    <div>
      <IconButton onClick={handleReportComment}>
        <Flag className={classes.flagColor} />
      </IconButton>
    </div>
  )
}

export default ReportButton
