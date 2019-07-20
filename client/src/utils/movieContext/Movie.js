import { createContext } from 'react'


const MovieContext = {
    getMovie: id => axios.get(`/movie/${id}`),
    addComment: id => axios.put(`/movie/${id}`)

}