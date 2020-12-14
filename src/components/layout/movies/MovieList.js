import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../../actions/movieActions';
import MovieItem from './MovieItem'

const MovieList = ({ moviesData: {movies, searchValue, loading}, getMovies}) => {

    useEffect( () => {
        if (searchValue.length > 2) {
            getMovies(searchValue)
        }
    }, [searchValue])

    console.log(movies)

    if ( searchValue.length > 0 && searchValue.length <= 2) {
        return <h4 className='text-center'>Too many Results</h4>
    } else if (movies.length === 0 || !movies || searchValue.length === 0 ) {
        return <p className='text-center'>Start your movie search!</p>
    } else {
        return (
            <div className='container-fluid movie-app'>
                <div className='row'>
                    {movies.map(movie => (
                        <MovieItem movie={movie} />
                    ))}
                </div>>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    moviesData: state.movieReducer
})

export default connect(mapStateToProps, { getMovies }) (MovieList)