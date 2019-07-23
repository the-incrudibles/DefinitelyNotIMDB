import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI imports:
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// Search imports:
import axios from 'axios'
import SearchResult from '../../utils/SearchResult.js'
import SearchContext from '../../utils/searchContext'
import SearchMovie from '../../components/SearchMovie'
import SearchTV from '../../components/SearchTV'
import SearchCelebrities from '../../components/SearchCelebrities'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TestSearch = _ => {
  const classes = useStyles();

  const inputLabel = useRef();

  const [labelWidth, setLabelWidth] = useState();

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // Sammi's code:
  const [searchState, setSearchState] = useState({
    searchArea: '',
    movies: [],
    shows: [],
    celebs: [],
    searchTerm: '',
    searchMovies: false,
    searchTV: false,
    searchCelebs: false,
    searchForCeleb: id => SearchResult.axiosForCeleb(id),
    searchForMovie: id => SearchResult.axiosForMovie(id),
    searchForShow: id => SearchResult.axiosForShow(id),
    incompleteSearch: false
  })

  const searchTerm = useRef()

  searchState.handleSearchArea = event => {
    setSearchState({ ...searchState, searchArea: event.target.value })
  }

  searchState.buttonClick = e => {
    e.preventDefault()
    // if title
    if (searchState.searchArea === 'movie') {
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(({ data }) => {
          searchTerm.current.value = ''
          setSearchState({ ...searchState, movies: data.results, searchArea: '', searchMovies: true, searchTV: false, searchCelebs: false, incompleteSearch: false })
        })
        .catch(e => console.log(e))

      // if tv
    } else if (searchState.searchArea === 'tv') {
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(({ data }) => {
          searchTerm.current.value = ''
          setSearchState({ ...searchState, shows: data.results, searchArea: '', searchMovies: false, searchTV: true, searchCelebs: false, incompleteSearch: false })
        })
        .catch(e => console.log(e))

      // if celeb
    } else if (searchState.searchArea === 'celebrity') {
      axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&query=${searchTerm.current.value}&page=1&include_adult=false`)
        .then(({ data }) => {
          searchTerm.current.value = ''
          setSearchState({ ...searchState, celebs: data.results, searchArea: '', searchMovies: false, searchTV: false, searchCelebs: true, incompleteSearch: false })
        })
        .catch(e => console.log(e))

      // if nothing selected
    } else if (searchState.searchArea === '') {
      setSearchState({ ...searchState, incompleteSearch: true })
    }
  }

  return (
    <div className="containerDiv">
      <div className='searchTypography'>
        <Typography variant="h6">Looking for something specific? Search away!</Typography>
      </div>
      {
        searchState.incompleteSearch ?
          <>
            <Typography className='failedCardText'>
              * Make sure to select a search category and enter a search term! *
            </Typography>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8 }}
              placeholder="Search by Movies, TV Shows, or Celebrities"
              fullWidth
              margin="normal"
              variant="outlined"
              inputRef={searchTerm}
              value={searchTerm.current.value}
              error id
            />
          </>
          :
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Search by Movies, TV Shows, or Celebrities"
            fullWidth
            margin="normal"
            variant="outlined"
            inputRef={searchTerm}
          />
      }
      <form className={classes.root} autoComplete="off">
        {
          searchState.incompleteSearch ?
            <FormControl variant="outlined" className={classes.formControl} error id>
              <InputLabel ref={inputLabel} htmlFor="outlined-category-simple">
                Category
              </InputLabel>
              <Select
                value={searchState.searchArea}
                onChange={searchState.handleSearchArea}
                input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
              >
                <MenuItem value="movie">Movie</MenuItem>
                <MenuItem value="tv">TV Show</MenuItem>
                <MenuItem value="celebrity">Celebrity</MenuItem>
              </Select>
              <FormHelperText>* Required</FormHelperText>
            </FormControl> :
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-category-simple">
                Category
                </InputLabel>
              <Select
                value={searchState.searchArea}
                onChange={searchState.handleSearchArea}
                input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
              >
                <MenuItem value="movie">Movie</MenuItem>
                <MenuItem value="tv">TV Show</MenuItem>
                <MenuItem value="celebrity">Celebrity</MenuItem>
              </Select>
              <FormHelperText>* Required</FormHelperText>
            </FormControl>
        }


        <div className="searchButton">
          <Button variant="contained" id="submitButtons" onClick={searchState.buttonClick}>
            Search
          </Button>
        </div>
      </form>

      <div>
        <SearchContext.Provider value={searchState}>
          {
            searchState.searchMovies ? <SearchMovie /> : ''
          }
          {
            searchState.searchTV ? <SearchTV /> : ''
          }
          {
            searchState.searchCelebs ? <SearchCelebrities /> : ''
          }
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default TestSearch