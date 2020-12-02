import React from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../../actions/searchActions'

const SearchForm = ({ getMovies }) => {


    const getMovieValue = async e => {
        console.log(e.target.value)
        getMovies(e.target.value)
        // const res = await axios.get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        // console.log(res.data.Search)
    }

    return (
        <form>
            <input type='text' onChange={getMovieValue} />   
        </form>
    )
}


export default connect(null, { getMovies })(SearchForm)