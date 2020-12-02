import React from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../../actions/searchActions'

const SearchForm = ({ getMovies }) => {


    const getMovieValue = async e => {
        console.log(e.target.value)
        getMovies(e.target.value)
    }

    return (
        <form>
            <input type='text' onChange={getMovieValue} />   
        </form>
    )
}


export default connect(null, { getMovies })(SearchForm)