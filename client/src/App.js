import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Bullshit'
import LoginPage from './Pages/Login'
import SignupForm from './Pages/Signup'
import Search from './Pages/Search'
import Movie from './Pages/Movie'
import TopRated from './Pages/TopRated'
import Celebrity from './Pages/Celebrity'
import Landing from './Pages/Landing'
import Latest from './Pages/Latest'
import Genres from './Pages/Genres'
import GenreResults from './Pages/GenreResults'
import AdminComments from './Pages/AdminComments'
import WatchList from './Pages/WatchList'
import TVShow from './Pages/TVShow'

const App = _ => {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' render={_ => (<Landing />)} />
        <Route path='/latest' render={_ => (<Latest />)} />
        <Route path='/movie' render={_ => (<Movie />)} />
        <Route path='/login' render={_ => (<LoginPage />)} />
        <Route path='/signup' render={_ => (<SignupForm />)} />
        <Route path='/search' render={_ => (<Search />)} />
        <Route path='/toprated' render={_ => (<TopRated />)} />
        <Route path='/celebrity' render={_ => (<Celebrity />)} />
        <Route path='/genres' render={_ => (<Genres />)} />
        <Route path='/genre' render={_ => (<GenreResults />)} />
        <Route path='/admincomments' render={_ => (<AdminComments />)} />
        <Route path='/watchlist' render={_ => (<WatchList />)} />
        <Route path='/tvshow' render={_ => (<TVShow />)} />
      </Router>
    </>
  )
}

export default App
