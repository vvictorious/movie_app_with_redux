import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeFavourite } from '../../../actions/movieActions'

import RemoveFavourite from './RemoveFavourite'

const FavouritesItem = ({movie, removeFavourite}) => {

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
            <div onClick={() => removeFavourite(movie.imdbID)} className='overlay d-flex align-items-center justify-content-center'>
                <RemoveFavourite />
            </div>            
        </Fragment>
    )
}



export default connect(null, {removeFavourite})(FavouritesItem)