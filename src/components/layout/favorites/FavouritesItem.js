import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeFavourite } from '../../../actions/movieActions'

import RemoveFavourite from './RemoveFavourite'

const FavouritesItem = ({movie, removeFavourite}) => {

    return (
        <Fragment>
            <img src={movie.Poster} alt='movie' />
            <div onClick={() => removeFavourite(movie.imdbID)} className='overlay d-flex align-items-center justify-content-center'>
                <RemoveFavourite />
            </div>            
        </Fragment>
    )
}



export default connect(null, {removeFavourite})(FavouritesItem)