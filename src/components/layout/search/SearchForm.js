import React, { useState } from 'react'
import axios from 'axios'

const SearchForm = () => {

    const [value, setValue] = useState('')

    const getMovieValue = async e => {
        setValue(e.target.value)
        console.log(value)
        const res = await axios.get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        console.log(res.data.Search)
    }

    return (
        <form>
            <input type='text' value={value} onChange={getMovieValue} />   
        </form>
    )
}

export default SearchForm