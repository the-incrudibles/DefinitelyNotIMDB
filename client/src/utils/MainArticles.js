import axios from 'axios'

const MainArticles = {
  getArticles: _ => axios.get('/articles')
}

export default MainArticles
