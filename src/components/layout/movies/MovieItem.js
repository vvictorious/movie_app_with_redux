import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addToFavourites } from '../../../actions/movieActions'
import AddFavourites from '../favorites/AddFavourite'
import moviesReducer from '../../../reducers/movieReducer';
import FavouritesItem from '../favorites/FavouritesItem';

const MovieItem = ({movie, addToFavourites}) => {

    // const checkIfMovieIsAlreadyInFavourites = movie => {
    //     FavouritesItem.forEach(fave => {
    //         console.log(fave)
    //         if (fave.imdbID === movie.imdbID) {
    //             console.log('this movie is already marked as a favourite')
    //         } else {
    //             addToFavourites(movie)
    //         }
    //     })
    // }

    return (
        <Fragment>
            <img src={movie.Poster} alt='movie' />
            <div onClick={ () => addToFavourites(movie)} className='overlay d-flex align-items-center justify-content-center'>
				<AddFavourites  />
            </div>            
        </Fragment>
    )
}

export default connect(null, {addToFavourites})(MovieItem)

// I have been thinking about this all wrong. I should bring in the favourites array and the movies array
// write a function up above that will be called on the on Click instead
