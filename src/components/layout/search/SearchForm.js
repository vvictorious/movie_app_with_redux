import React, { useState } from 'react'

const SearchForm = () => {

    const [value, setValue] = useState('')

    const getMovieValue = e => {
        setValue(e.target.value)
        console.log(value)
    }

    return (
        <form>
            <input type='text' value={value} onChange={getMovieValue} />   
        </form>
    )
}

export default SearchForm