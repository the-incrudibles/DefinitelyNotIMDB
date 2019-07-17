import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = _ => {
  return (
    <>
      <Router>
        <NavBar />
        <Route />
      </Router>
    </>
  )
}

export default App
