import React from 'react'
import { connect } from 'react-redux'
import { getSearchValue, getMovies } from '../../../actions/movieActions'

const SearchForm = ({ getSearchValue }) => {


    const getMovieValue = async e => {
        console.log(e.target.value)
        getSearchValue(e.target.value)
    }

    return (
        <form>
            <input type='text' onChange={getMovieValue} />   
        </form>
    )
}

export default connect(null, { getSearchValue, getMovies })(SearchForm)