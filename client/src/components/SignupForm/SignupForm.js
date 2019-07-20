import React, { useState, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
// Text Input Imports:
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Signup from '../../utils/Signup.js'

const SignupForm = _ => {

  const name = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()

  const [userState, setUserState] = useState({
    isLoggedIn: false
  })

  userState.handleSignUp = _ => {
    Signup.register({ name: name.current.value, username: username.current.value, email: email.current.value, password: password.current.value})
    setUserState({ ...userState, isLoggedIn: !userState.isLoggedIn })
  }

  return (
    <div className='loginDiv'>

      <form>
        <div className='loginHeader'>
          <Typography variant='h5' >Sign up for an account</Typography>
        </div>

        <TextField
          label="Full Name"
          margin="normal"
          variant="outlined"
          className="textInput"
          inputRef={name}
        />

        <TextField
          label="Username"
          margin="normal"
          variant="outlined"
          className="usernameInput"
          inputRef={username}
        />

        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          className="usernameInput"
          inputRef={email}
        />

        <TextField
          label="Password"
          margin="normal"
          variant="outlined"
          className="passwordInput"
          inputRef={password}
        />

        <div>
          <FormControlLabel
            control={
              <Checkbox value='checkedA' />
            }
            label='I agree to the terms and conditions'
          />
        </div>
        <div className='loginButtons'>
          <Button variant='contained' color='primary' onClick={userState.handleSignUp}>
            Sign Up
          </Button>
          <Button color='primary'>
            Cancel
          </Button>
          <Typography><p className='loginLink'>Already have an account? <a href='/login'>Log in here</a></p></Typography>
        </div>

      </form>
    </div >
  )
}

export default SignupForm
