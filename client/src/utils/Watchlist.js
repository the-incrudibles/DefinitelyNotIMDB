import axios from 'axios'

// const Watchlist = {
//   populate: userInfo => {
//     axios.get('/watchlist')
//   }
// }

const Watchlist = {
  getWatchlist: id => axios.get(`user/${id}`),
  addWatchlist: id => axios.put(`/movie/${id}`)
}

export default Watchlist
