import axios from 'axios'

const Login = {
  loginUser: userInfo => {
    axios.post('/login', userInfo)
  }
}

export default Login
