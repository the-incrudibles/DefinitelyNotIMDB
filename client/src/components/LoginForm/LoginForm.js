import React, { useState, useEffect, useRef, createRef } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
// Text Input Imports:
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText';
import Login from '../../utils/Login.js'

const LoginForm = _ => {

  const username = useRef()
  const password = useRef()

  const [userState, setUserState] = useState({
    redirect: false,
    isLoggedIn: false,
    failedLogin: false,
    stayLoggedIn: false,
    user: ''
  })

  userState.setRedirect = _ => {
    setUserState({ ...userState, redirect: true })
  }

  userState.renderRedirect = _ => {
    if (userState.redirect) {
      return <Redirect to='/' />
    }

  // const [userState, setUserState] = useState({
  //   username: '',
  //   password: '',
  //   isLoggedIn: false
  // })

  // userState.handleInputChange = event => {
  //   setUserState({ ...userState, [event.target.id]: event.target.value })
  // }

  // userState.handleSignUp = _ => {
  //   Login.loginUser(userState)
  // }
  const name = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const _username = createRef()
  const _password = createRef()

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
    <div className="loginDiv">
      {userState.renderRedirect()}

      <div className="blockTypography">
        <Typography >In order to leave comments or reviews, or join movie clubs, you'll have to log into your account.</Typography>
      </div>

      <form>
        <div className="loginHeader">
          <Typography variant='h5' >Log into your account</Typography>
        </div>

        {
          userState.failedLogin && username.current.value === '' ?
            <>
              <TextField
                id='outlined-name'
                label='Username'
                margin='normal'
                variant='outlined'
                inputRef={username}
                className="usernameInput"
                error id
              />
              <FormHelperText><p className="emptyInput">*Required field </p></FormHelperText>
            </>
            : <TextField
              id='outlined-name'
              label='Username'
              margin='normal'
              variant='outlined'
              inputRef={username}
              className="usernameInput"
            />
        }

        {
          userState.failedLogin && password.current.value === '' ?
            <>
              <TextField
                id='outlined-name'
                label='Password'
                margin='normal'
                variant='outlined'
                inputRef={password}
                className="passwordInput"
                error id
              />
              <FormHelperText><p className="emptyInput">*Required field </p></FormHelperText>
            </>
            : <TextField
              id='outlined-name'
              label='Password'
              margin='normal'
              variant='outlined'
              inputRef={password}
              className="passwordInput"
            />
        }

        <div>
          <FormControlLabel
            control={
              <Checkbox value="checkedA" />
            }
            label="Remember me"
            className="checkBox"
          />
        </div>

        <div className='loginButtons'>
          <Button variant='contained' color='primary' onClick={userState.handleLogInUser}>
            Login
          </Button>
          <Button color="primary">
            Forgot Password?
          </Button>
          <Typography ><p className="signupLink">Don't have an account? <a href="/signup">Sign up here</a></p></Typography>
        </div>

      </form>
    </div >
  )
}

export default LoginForm
