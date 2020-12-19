import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../../actions/movieActions';
import MovieItem from './MovieItem'

const MovieList = ({ moviesData: {movies, searchValue, loading}, getMovies}) => {

    useEffect( () => {
        if (searchValue.length > 2) {
            getMovies(searchValue)
        }
    }, [searchValue])


    if ( searchValue.length > 0 && searchValue.length <= 2) {
        return (
            <Fragment>
                <h4 className='text-center m-3'>Too many Results</h4>
                <h3 className='m-3'>Movie List</h3>
            </Fragment>
        )
    } else if (movies.length === 0 || !movies || searchValue.length === 0 ) {
        return (
            <Fragment>
                <h4 className='text-center m-3'>Start your movie search!</h4>
                <h3 className='m-3'>Movie List</h3>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <h3 className='m-3'>Movie List</h3>
                <div className='container-fluid movie-app'>
                    <div className='row'>
                        {movies.map(movie => (
                            <div className='image-container d-flex justify-content-start m-3'>                        
                                <MovieItem movie={movie} key={movie.imdbID} />
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    moviesData: state.movieReducer
})

export default connect(mapStateToProps, { getMovies }) (MovieList)