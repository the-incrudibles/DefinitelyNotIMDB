import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import NavBar from './components/NavBar'

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

    axios.post('/register', {
      name: name.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    })
      .then(({ data }) => {
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
        <NavBar />
        <Route />
      </Router>
    </>
  )
}

export default App;
