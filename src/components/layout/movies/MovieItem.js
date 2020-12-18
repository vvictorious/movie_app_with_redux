import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addToFavourites, alreadyInFavourites } from '../../../actions/movieActions'
import AddFavourites from '../favorites/AddFavourite'
import { ConsoleWriter } from 'istanbul-lib-report';

const MovieItem = ({ moviesData: {favourites}, movie, addToFavourites, alreadyInFavourites}) => {

    const favouriteCheck = movie => {
        if (favourites.length > 0) {
            const sameIdArray = favourites.filter(fave => fave.imdbID === movie.imdbID)
            console.log(sameIdArray)
            if (sameIdArray.length === 0) {
                console.log('movie is not in the favourties')
                console.log(sameIdArray)
                addToFavourites(movie)
            } else {
                console.log(sameIdArray[0].Title)
                // we are going to fire a function that takes sameIdArray[0].Title as the payload
                alreadyInFavourites(sameIdArray[0].Title)
                console.log('we are within the nested else and movie is in favouritees')
            }
        } else {
            addToFavourites(movie)
            console.log('the second part of the parent conditional is true')
        }
    }

    return (
        <Fragment>
            <img src={movie.Poster} alt='movie' />
            <div onClick={ () => favouriteCheck(movie)} className='overlay d-flex align-items-center justify-content-center'>
				<AddFavourites  />
            </div>            
        </Fragment>
    )
}

const mapStateToProps = state => ({
    moviesData: state.movieReducer
})
export default connect(mapStateToProps, {addToFavourites, alreadyInFavourites})(MovieItem)

// I have been thinking about this all wrong. I should bring in the favourites array and the movies array
// write a function up above that will be called on the on Click instead
