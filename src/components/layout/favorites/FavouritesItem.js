import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const FavouritesItem = ({movie}) => {

    return (
        <Fragment>
            <img src={movie.Poster} alt='movie' />
            <div className='overlay d-flex align-items-center justify-content-center'>
                <p>remove from favs</p>
            </div>            
        </Fragment>
    )
}



export default FavouritesItem