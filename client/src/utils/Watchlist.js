import axios from 'axios'

const Watchlist = {
  populate: userInfo => {
    axios.get('/watchlist')
  }
}

export default Watchlist
