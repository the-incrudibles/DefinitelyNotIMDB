import React, { useRef } from 'react'
import Typography from '@material-ui/core/Typography'
// Text Input Imports:
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const SignupForm = _ => {

  const name = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()

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
          ref={name}
        />

        <TextField
          label="Username"
          margin="normal"
          variant="outlined"
          className="usernameInput"
          ref={username}
        />

        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          className="usernameInput"
          ref={email}
        />

        <TextField
          label="Password"
          margin="normal"
          variant="outlined"
          className="passwordInput"
          ref={password}
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
          <Button variant='contained' color='primary'>
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
