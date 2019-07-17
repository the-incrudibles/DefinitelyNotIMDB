import React from 'react'
import Navbar from '../../components/NavBar.js'

const Search = _ => {
  return (
    <>
      <Navbar />
      <input type='text' name='search' id='search' />
      <h2>Dropdown</h2>
      <div>
        <h6>Movies</h6>
        <h6>Movies</h6>
        <h6>Movies</h6>
        <h6>Movies</h6>
      </div>
    </>
  )
}

export default Search
