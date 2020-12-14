import React, { Fragment } from 'react'

const MovieItem = ({movie, FavouriteComponent}) => {
    return (
        <Fragment>
            <img src={movie.Poster} alt='movie' />
            <div className='overlay d-flex align-items-center justify-content-center'>
				<FavouriteComponent />
            </div>            
        </Fragment>
    )
}

export default MovieItem