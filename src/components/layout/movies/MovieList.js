import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../../actions/movieActions';

const MovieList = ({ moviesData: {movies, searchValue, loading}, getMovies}) => {

    useEffect( () => {
        if (movies !== undefined && searchValue.length > 3) {
            getMovies(searchValue)
        }
    }, [searchValue])

    console.log(movies)

    if (movies.length === 0 || !movies) {
        return <h4>Time to start searching</h4>
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