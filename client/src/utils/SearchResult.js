import axios from 'axios'

const SearchResult = {
  addCelebrity: celeb => axios.post('/celebrity', { celeb })
}

export default SearchResult
