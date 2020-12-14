import React from 'react'

const MovieItem = ({movie}) => {
    return (
        <div>
            <img src={movie.Poster} alt='movie' />
            <h1>{movie.Title}</h1>
        </div>
    )
}

export default MovieItem