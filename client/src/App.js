import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Threads from './Pages/Thread/Thread.js'
import Search from './Pages/Search'

const App = _ => {
  return (
    <>
      <Router>
        <NavBar />
        <Route path='/threads' render={_ => (
          <Threads
          />
        )} />
        <Route path='/search' render={_ => (
          <Search />
        )} />
      </Router>
    </>
  )
}

export default App
