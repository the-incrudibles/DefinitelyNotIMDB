import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import Movie from "./Pages/Movie/Movie.js"

const App = _ => {
  return(
    <>
    <Router>
      <NavBar/>
      <Route path='/movie' render={_ => (
            <Movie
            />
            )} />
    </Router>
    </>
  )
}

export default App;
