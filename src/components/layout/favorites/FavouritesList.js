import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import FavouritesItem from './FavouritesItem'

const FavouritesList = ({ moviesData: {favourites, searchValue, loading}, getMovies}) => {

    
    return (
        <Fragment>
            <h3 className={favourites.length > 0 ? 'm-3': 'hidden'}>Favourites List</h3>
            <div className='container-fluid movie-app'>
                <div className='row'>
                    {favourites.map(movie => (
                        <div className='image-container d-flex justify-content-start m-3'>                        
                            <FavouritesItem movie={movie} key={movie.imdbID} />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )


}

const mapStateToProps = state => ({
    moviesData: state.movieReducer
})

export default connect(mapStateToProps) (FavouritesList)