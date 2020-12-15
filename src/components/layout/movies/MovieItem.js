import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addToFavourites } from '../../../actions/movieActions'
import AddFavourites from '../favorites/AddFavourite'

const MovieItem = ({movie, addToFavourites}) => {

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