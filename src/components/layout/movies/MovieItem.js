import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addToFavourites } from '../../../actions/movieActions'
import AddFavourites from '../favorites/AddFavourite'

const MovieItem = ({ moviesData: {favourites}, movie, addToFavourites}) => {

    const favouriteCheck = movie => {
        if (favourites.length > 0) {
            favourites.forEach(fave => {      
                if (fave.imdbID === movie.imdbID) {
                    console.log('that movie is already a favourite')
                } else {
                    addToFavourites(movie)
                    console.log(fave.imdbID)
                    console.log(movie.imdbID)
                }
            })
        } else {
            addToFavourites(movie)
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
export default connect(mapStateToProps, {addToFavourites})(MovieItem)

// I have been thinking about this all wrong. I should bring in the favourites array and the movies array
// write a function up above that will be called on the on Click instead
