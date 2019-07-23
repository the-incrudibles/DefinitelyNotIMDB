import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Bullshit'
import LoginPage from './Pages/Login'
import SignupForm from './components/SignupForm'
import axios from 'axios'
import Search from './Pages/Search'
import Movie from './Pages/Movie'
import TopRated from './Pages/TopRated'
import Celebrity from './Pages/Celebrity'
import AdminComments from './Pages/AdminComments'
import WatchList from './Pages/WatchList'

const App = _ => {
  return (
    <>
      <Router>
        <Navbar />
        <Route path='/search' render={_ => (
          <Search />
        )} />
        <Route path='/movie' render={_ => (<Movie />)} />
        <Route path='/login' render={_ => (<LoginPage />)} />
        <Route path='/signup' render={_ => (<SignupForm />)} />
        <Route path='/Toprated' render={_ => (<TopRated />)} />
        <Route path='/celebrity' render={_ => (<Celebrity />)} />
        <Route path='/admincomments' render={_ => (<AdminComments />)} />
        <Route path='/watchlist' render={_ => (<WatchList />)} />
      </Router>
    </>
  )
}

export default App
