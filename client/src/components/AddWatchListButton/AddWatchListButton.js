import React, { Component,useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

class AddWatchListButton extends Component {
    state = {
      title: '',
      movie: {},
      watchlist: []
    }

    
    handleAddWatchList = event => {
        console.log('button works')
        }
        render(){
        return (
        <div className="addWatchlistButton" onClick ={this.handleAddWatchList}>
            <Fab color="default" aria-label="Add" size="small">
                <AddIcon />
            </Fab>
        </div>
    )
}
}

export default AddWatchListButton









  