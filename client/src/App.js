import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Bullshit'
import LoginPage from './Pages/Login'
import SignupForm from './components/SignupForm'
import axios from 'axios'
import Search from './Pages/Search'
import Movie from './Pages/Movie'

const App = _ => {
  const name = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const _username = useRef()
  const _password = useRef()

  const [userState, setUserState] = useState({
    isLoggedIn: false,
    user: ''
  })

  userState.handleRegisterUser = event => {
    event.preventDefault()
    console.log(password.current.value)

    axios.post('/register', {
      name: name.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    })
      .then(({ data }) => {
        console.log(data)
        if (data.isLoggedIn) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', data.user)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, user: data.user })
        }
      })
      .catch(e => console.error(e))
  }

  userState.handleLogInUser = event => {
    event.preventDefault()
    console.log(_password.current.value)

    axios.post('/login', {
      username: _username.current.value,
      password: _password.current.value
    })
      .then(({ data }) => {
        if (data.isLoggedIn) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', data.user)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, user: data.user })
        } else {
          alert('Invalid username or password')
        }
      })
      .catch(e => console.error(e))
  }

  useEffect(_ => {
    axios.post('/verify', {}, {
      headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
    })
      .then(_ => {
        setUserState({ ...userState, isLoggedIn: true, user: localStorage.getItem('user') })
      })
      .catch(_ => {
        setUserState({ ...userState, isLoggedIn: false, user: '' })
      })
  }, [])
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
        </Router>
    </>
  )
}

export default App
