import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import RemoveFavourite from './RemoveFavourite'

const FavouritesItem = ({movie}) => {

    return (
        <Fragment>
            <img src={movie.Poster} alt='movie' />
            <div className='overlay d-flex align-items-center justify-content-center'>
                <RemoveFavourite />
            </div>            
        </Fragment>
    )
}



export default FavouritesItem