import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
// Text Input Imports:
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Login from '../../utils/Login.js'

const LoginForm = _ => {
  const [userState, setUserState] = useState({
    username: '',
    password: '',
    isLoggedIn: false
  })

  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.id]: event.target.value })
  }

  userState.handleSignUp = _ => {
    Login.loginUser(userState)
  }

  return (
    <div className='loginDiv'>

      <div className='blockTypography'>
        <Typography >In order to leave comments or reviews, or join movie clubs, you'll have to log into your account.</Typography>
      </div>

      <form>
        <div className='loginHeader'>
          <Typography variant='h5' >Log into your account</Typography>
        </div>

        <TextField
          id='outlined-name'
          label='Username'
          margin='normal'
          variant='outlined'
          className='usernameInput'
          onChange={userState.handleInputChange}
        />

        <TextField
          id='outlined-name'
          label='Password'
          margin='normal'
          variant='outlined'
          className='passwordInput'
          onChange={userState.handleInputChange}
        />

        <div>
          <FormControlLabel
            control={
              <Checkbox value='checkedA' />
            }
            label='Remember me'
          />
        </div>
        <div className='loginButtons'>
          <Button variant='contained' color='primary'>
            Login
          </Button>
          <Button color='primary'>
            Forgot Password?
          </Button>
          <Typography ><p className='signupLink'>Don't have an account? <a href='/signup'>Sign up here</a></p></Typography>
        </div>

      </form>
    </div >
  )
}

export default LoginForm
