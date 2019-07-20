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
    isLoggedIn: false,
    failedLogin: false,
    stayLoggedIn: false,
    user: ''
  })

  userState.renderRedirect = _ => {
    if (userState.isLoggedIn) {
      return <Redirect to='/' />
    }
  }

  userState.handleLogInUser = event => {
    event.preventDefault()
    axios.post('/login', {
      username: username.current.value,
      password: password.current.value
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
      {userState.isLoggedIn ? <Redirect to='/' /> : null}
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
