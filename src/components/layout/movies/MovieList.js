import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../../actions/movieActions';

const MovieList = ({ moviesData: {movies, searchValue, loading}, getMovies}) => {

    useEffect( () => {
        if (searchValue.length > 2) {
            getMovies(searchValue)
        }
    }, [searchValue])

    console.log(movies)

    if ( searchValue.length > 0 && searchValue.length <= 2) {
        return <h4>Too many Results</h4>
    } else if (movies.length === 0 || !movies || searchValue.length === 0 ) {
        return <h4>Start your movie search!</h4>
    } else {
        return <Fragment>
            {movies.map(movie => (
                <p>{movie.Title}</p>
            ))}
        </Fragment>
    }

}

const mapStateToProps = state => ({
    moviesData: state.movieReducer
})

export default connect(mapStateToProps, { getMovies }) (MovieList)