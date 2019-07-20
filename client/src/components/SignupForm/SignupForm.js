import React, { useState, useRef, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
// Text Input Imports:
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Signup from '../../utils/Signup.js'
import axios from 'axios'

const SignupForm = _ => {
  const name = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()

  const [userState, setUserState] = useState({
    redirect: false,
    checkedA: false,
    isLoggedIn: false,
    failedRegistration: false
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
          localStorage.setItem('admin', data.admin)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, user: data.user })
        } else {
          userState.handleCheckboxClick = _ => {
            setUserState({ ...userState, checkedA: !userState.checkedA })
          }
        }
      })
      .catch(e => console.error(e))
  }

  userState.handleCancelButton = _ => {
    if (name.current.value === '' && username.current.value === '' && email.current.value === '' && password.current.value === '') {
      userState.setRedirect()
    } else {
      name.current.value = ''
      username.current.value = ''
      email.current.value = ''
      password.current.value = ''
    }
  }

  userState.setRedirect = _ => {
    setUserState({ ...userState, redirect: true })
  }

  userState.renderRedirect = _ => {
    if (userState.isLoggedIn) {
      return <Redirect to='/' />
    }
  }

  useEffect(_ => {
    axios.post('/verify', {}, {
      headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
    })
      .then(_ => {
        setUserState({ ...userState, isLoggedIn: true, user: localStorage.getItem('user') })
        userState.renderRedirect()
      })
      .catch(_ => {
        setUserState({ ...userState, isLoggedIn: false, user: '' })
      })
  }, [])

  return (
    <div className='loginDiv'>
      {userState.isLoggedIn ? userState.renderRedirect() : null}

      {
        userState.failedRegistration === true
          ? <div className='blockTypography'>
            <Typography variant='h6' className='failedCardText'>
              * Please be sure to completely fill out the form! *
            </Typography>
          </div>
          : null
      }

      <form>
        <div className='loginHeader'>
          <Typography variant='h5' >Sign up for an account</Typography>
        </div>

        {
          userState.failedRegistration && name.current.value === ''
            ? <>
              <TextField
                label='Full Name'
                margin='normal'
                variant='outlined'
                className='textInput'
                inputRef={name}
                error id
              />
              <FormHelperText><p className='emptyInput'>*Required field </p></FormHelperText>
            </> : <TextField
              label='Full Name'
              margin='normal'
              variant='outlined'
              className='textInput'
              inputRef={name}
            />
        }

        {
          userState.failedRegistration && username.current.value === ''
            ? <>
              <TextField
                label='Username'
                margin='normal'
                variant='outlined'
                className='usernameInput'
                inputRef={username}
                error id
              />
              <FormHelperText><p className='emptyInput'>*Required field </p></FormHelperText>
            </> : <TextField
              label='Username'
              margin='normal'
              variant='outlined'
              className='usernameInput'
              inputRef={username}
            />
        }

        {
          userState.failedRegistration && email.current.value === ''
            ? <>
              <TextField
                label='Email'
                margin='normal'
                variant='outlined'
                className='emailInput'
                inputRef={email}
                error id
              />
              <FormHelperText><p className='emptyInput'>*Required field </p></FormHelperText>
            </> : <TextField
              label='Email'
              margin='normal'
              variant='outlined'
              className='emailInput'
              inputRef={email}
            />
        }

        {
          userState.failedRegistration && password.current.value === ''
            ? <>
              <TextField
                label='Password'
                margin='normal'
                variant='outlined'
                className='passwordInput'
                inputRef={password}
                error id
              />
              <FormHelperText><p className='emptyInput'>*Required field </p></FormHelperText>
            </> : <TextField
              label='Password'
              margin='normal'
              variant='outlined'
              className='passwordInput'
              inputRef={password}
            />
        }

        <div>
          {
            userState.failedRegistration && userState.checkedA === false
              ? <>
                <FormControlLabel
                  control={
                    <Checkbox value='checkedA' onClick={userState.handleCheckboxClick} />
                  }
                  label="I agree to the site's terms and conditions"
                  className='checkBox'
                />
                <FormHelperText id='uncheckedBox' >*You must check this box to continue*</FormHelperText>
              </>
              : <FormControlLabel
                control={
                  <Checkbox value='checkedA' onClick={userState.handleCheckboxClick} />
                }
                label="I agree to the site's terms and conditions"
                className='checkBox'
              />
          }

        </div>
        <div className="loginButtons">
          <Button variant="contained" id="submitButtons" onClick={userState.handleRegisterUser}>
            Sign Up
          </Button>
          <Button color='primary' onClick={userState.handleCancelButton}>
            Cancel
          </Button>
          <Typography><p className='loginLink'>Already have an account? <a href='/login'>Log in here</a></p></Typography>
        </div>

      </form>
    </div >
  )
}

export default SignupForm
