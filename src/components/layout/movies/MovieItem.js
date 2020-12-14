import React, { Fragment } from 'react'

const MovieItem = ({movie}) => {
    return (
        <Fragment>
            <img src={movie.Poster} alt='movie' />
            <div className='overlay d-flex align-items-center justify-content-center'>
				Add to Favourites
            </div>            
        </Fragment>
    )
}

export default MovieItem