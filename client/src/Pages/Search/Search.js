import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'

const Search = _ => {
  // const SearchInput = withStyles(theme => ({
  //   root: {
  //     'label + &': {
  //       // marginTop: theme.spacing(3)
  //     }
  //   },
  //   input: {
  //     borderRadius: 4,
  //     position: 'relative',
  //     backgroundColor: theme.palette.background.paper,
  //     border: '1px solid #ced4da',
  //     fontSize: 16,
  //     padding: '10px 26px 10px 12px',
  //     transition: theme.transitions.create(['border-color', 'box-shadow']),
  //     fontFamily: [
  //       '-apple-system',
  //       'BlinkMacSystemFont',
  //       '"Segoe UI"',
  //       'Roboto',
  //       '"Helvetica Neue"',
  //       'Arial',
  //       'sans-serif',
  //       '"Apple Color Emoji"',
  //       '"Segoe UI Emoji"',
  //       '"Segoe UI Symbol"'
  //     ].join(','),
  //     '&:focus': {
  //       borderRadius: 4,
  //       borderColor: '#80bdff',
  //       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
  //     }
  //   }
  // }))(InputBase)

  const [age, setAge] = useState('')
  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <>
      <input type='text' name='search' id='search' />
      <br />
      <form>
        <FormControl>
          <InputLabel htmlFor='category'>Search Category</InputLabel>
          <Select
            value={age}
            onChange={handleChange}
          // input={<SearchInput name='search' id='category' />}
          >
            <MenuItem disabled />
            <MenuItem value='movie'>Movie</MenuItem>
            <MenuItem value='celebrity'>Celebrity</MenuItem>
            <MenuItem value='genre'>Genre</MenuItem>
          </Select>
        </FormControl>
      </form>

      <div>
        <h6>Movies/Celebrities/Genres</h6>
        <h6>Movies/Celebrities/Genres</h6>
        <h6>Movies/Celebrities/Genres</h6>
        <h6>Movies/Celebrities/Genres</h6>
      </div>
    </>
  )
}

export default Search
