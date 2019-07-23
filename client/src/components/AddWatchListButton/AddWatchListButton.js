import React, { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'



const AddWatchListButton = _ => {

const handleAddWatchList = event =>{
    axios.put(`/user/${'id'}`, {
        
    })
    .then(_ =>{
        console.log('success')
    })
    .catch(e => console.log(e))
}
    return (
        <div className="addWatchlistButton">
            <Fab color="default" aria-label="Add" size="small" onClick={handleAddWatchList}>
                <AddIcon />
            </Fab>
        </div>
    )
}

export default AddWatchListButton
