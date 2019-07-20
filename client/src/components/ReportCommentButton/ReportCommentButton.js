import React, { useState, useEffect } from 'react'
import Flag from '@material-ui/icons/Flag'
import axios from 'axios'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  flagColor: {
    color: 'red'
  }
}))
const ReportButton = _ => {
  const [reportComment, setReportComment] = useState([])
  const classes = useStyles()

  // useEffect(_=>{
  //     axios.post('/')

  // },[])

  return (
    <div>
      <Flag className={classes.flagColor} />
    </div>
  )
}

export default ReportButton
