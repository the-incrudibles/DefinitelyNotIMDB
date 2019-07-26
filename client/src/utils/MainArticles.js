import axios from 'axios'

const MainArticles = {
  getArticles: _ => axios.get('/articles'),
  getArticle: id => axios.get('/articleinfo')
}

export default MainArticles
