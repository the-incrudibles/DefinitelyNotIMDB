import axios from 'axios'

const SearchResult = {
  axiosForCeleb: id => {
    axios.get(`/celebrity/${id}`)
      .then(celeb => {
        if (!celeb.data) {
          console.log('post')
          SearchResult.postCeleb(id)
        } else {
          console.log('put')
          SearchResult.putCeleb(id)
        }
      })
      .catch(e => console.log(e))
  },
  postCeleb: id => {
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=d12a96cdcfe3d81297140ffea9dca118&language=en-US`)
      .then(({ data: celeb }) => {
        axios.post('/celebrity', { celeb })
      })
      .catch(e => console.log(e))
  },
  putCeleb: id => {
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=d12a96cdcfe3d81297140ffea9dca118&language=en-US`)
      .then(({ data: celeb }) => {
        axios.put(`/celebrity/${celeb.id}`, { celeb })
      })
      .catch(e => console.log(e))
  }
}

export default SearchResult
