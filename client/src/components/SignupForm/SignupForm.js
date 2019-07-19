import React, { useState, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
// Text Input Imports:
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Signup from '../../utils/Signup.js'

const SignupForm = _ => {

  const [userState, setUserState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    isLoggedIn: false,
  })

  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.id]: event.target.value })
  }

  userState.handleSignUp = _ => {
    Signup.register(userState)
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
          onChange={userState.handleInputChange}
          id="name"
        />

        <TextField
          label="Username"
          margin="normal"
          variant="outlined"
          className="usernameInput"
          onChange={userState.handleInputChange}
          id="username"
        />

        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          className="usernameInput"
          onChange={userState.handleInputChange}
          id="email"
        />

        <TextField
          label="Password"
          margin="normal"
          variant="outlined"
          className="passwordInput"
          onChange={userState.handleInputChange}
          id="password"
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
