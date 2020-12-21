import React from 'react'
import { connect } from 'react-redux'
import { getSearchValue, getMovies } from '../../../actions/movieActions'

const SearchForm = ({ getSearchValue }) => {


    const getMovieValue = async e => {
        getSearchValue(e.target.value)
    }

    return (
        <form className='center'>
            <input type='text' onChange={getMovieValue} />   
        </form>
    )
}

export default connect(null, { getSearchValue, getMovies })(SearchForm)