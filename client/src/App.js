import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Threads from './Pages/Thread/Thread.js'
import LoginPage from './Pages/Login'
import SignupPage from './Pages/Signup'

const App = _ => {
  return (
    <>
      <Router>
        <Navbar />
        <Route path='/threads' render={_ => (<Threads/>)} />
        <Route path='/login' render={_ => (<LoginPage/>)} />
        <Route path='/signup' render={_ => (<SignupPage/>)} />
      </Router>
    </>
  )
}

export default App
