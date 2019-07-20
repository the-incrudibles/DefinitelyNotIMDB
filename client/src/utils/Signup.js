import axios from 'axios'

const Signup = {
  register: userInfo => {
    axios.post('/register', userInfo)
  }
}

export default Signup
