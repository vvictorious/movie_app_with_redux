import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../../actions/movieActions';

const MovieList = ({ movies: {movies, searchValue, loading}, getMovies}) => {

    useEffect( () => {
        getMovies(searchValue)
        console.log(movies)
    }, [searchValue])

    return (
        <Fragment>
            <h1>hi</h1>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMovies }) (MovieList)