import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeFavourite } from '../../../actions/movieActions'

import RemoveFavourite from './RemoveFavourite'

const FavouritesItem = ({movie, removeFavourite, moviesData: {favourites}}) => {

	const saveToLocalStorage = items => {
		localStorage.removeItem('react-movie-app-favourites', JSON.stringify(items));
    }  

    const handleRemove = currentMovie => {
        removeFavourite(currentMovie.imdbID)
        let items =JSON.parse(localStorage.getItem("react-movie-app-favourites"));
        items = items.filter(item => item.imdbID !== currentMovie.imdbID);
        localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
        if (items.length === 0) {
          localStorage.removeItem("react-movie-app-favourites");
        }          
    }

    return (
        <Fragment>
            {movie.Poster !== 'N/A' ?
                <img src={movie.Poster} alt='movie' /> :
                <h5 className='blank-movie text-center p-3'>{movie.Title}
                    <span className='no-poster'>
                        No poster for this film
                    </span>
                </h5>
            }
            <div onClick={() => handleRemove(movie)} className='overlay d-flex align-items-center justify-content-center'>
                <RemoveFavourite />
            </div>            
        </Fragment>
    )
}

const mapStateToProps = state => ({
    moviesData: state.movieReducer
})

export default connect(mapStateToProps, {removeFavourite})(FavouritesItem)