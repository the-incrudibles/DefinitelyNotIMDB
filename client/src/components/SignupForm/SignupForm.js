import React, { useState, useRef, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
// Text Input Imports:
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Signup from '../../utils/Signup.js'
// Checkbox Card Imports: 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const SignupForm = _ => {

  const name = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()

  const [userState, setUserState] = useState({
    checkedA: false,
    isLoggedIn: false,
    failedRegistration: false
  })

  userState.handleSignUp = _ => {
    if (userState.checkedA === false || name.current.value === '' || username.current.value === '' || email.current.value === '' || password.current.value === '') {
      setUserState({ ...userState, failedRegistration: !userState.failedRegistration })
    } else {
      Signup.register({ name: name.current.value, username: username.current.value, email: email.current.value, password: password.current.value })
      setUserState({ ...userState, isLoggedIn: true })
    }
  }

  userState.handleCheckboxClick = _ => {
    setUserState({ ...userState, checkedA: !userState.checkedA })
  }

  return (
    <div className='loginDiv'>

      {
        userState.failedRegistration === true ? (
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary">
                Please be sure to completely fill out the form and agree to the terms and conditions!
              </Typography>
            </CardContent>
          </Card>
        ) : (
            null
          )
      }

      <form>
        <div className="loginHeader">
          <Typography variant='h5' >Sign up for an account</Typography>
        </div>

        {
          userState.failedRegistration && name.current.value === '' ?
            <TextField
              label="Full Name"
              margin="normal"
              variant="outlined"
              className="textInput"
              inputRef={name}
              error id
            /> : <TextField
              label="Full Name"
              margin="normal"
              variant="outlined"
              className="textInput"
              inputRef={name}
            />
        }

        {
          userState.failedRegistration && username.current.value === '' ?
            <TextField
              label="Username"
              margin="normal"
              variant="outlined"
              className="usernameInput"
              inputRef={username}
              error id
            /> : <TextField
              label="Username"
              margin="normal"
              variant="outlined"
              className="usernameInput"
              inputRef={username}
            />
        }

        {
          userState.failedRegistration && email.current.value === '' ?
            <TextField
              label="Email"
              margin="normal"
              variant="outlined"
              className="emailInput"
              inputRef={email}
              error id
            /> : <TextField
              label="Email"
              margin="normal"
              variant="outlined"
              className="emailInput"
              inputRef={email}
            />
        }

        {
          userState.failedRegistration && password.current.value === '' ?
            <TextField
              label="Password"
              margin="normal"
              variant="outlined"
              className="passwordInput"
              inputRef={password}
              error id
            /> : <TextField
              label="Password"
              margin="normal"
              variant="outlined"
              className="passwordInput"
              inputRef={password}
            />
        }

        <div>
          <FormControlLabel
            control={
              <Checkbox value="checkedA" onClick={userState.handleCheckboxClick} />
            }
            label="I agree to the terms and conditions"
          />
        </div>
        <div className="loginButtons">
          <Button variant="contained" color="primary" onClick={userState.handleSignUp}>
            Sign Up
          </Button>
          <Button color="primary">
            Cancel
          </Button>
          <Typography><p className="loginLink">Already have an account? <a href="/login">Log in here</a></p></Typography>
        </div>

      </form>
    </div >
  )
}

export default SignupForm
