import axios from 'axios'

// const Watchlist = {
//   populate: userInfo => {
//     axios.get('/watchlist')
//   }
// }

const Watchlist = {
  getWatchlist: _ => axios.get('/watchlist'),
  addWatchlist: id => axios.put(`/movie/${id}`)
}

export default Watchlist
