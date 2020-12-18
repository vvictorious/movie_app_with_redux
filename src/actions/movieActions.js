import { 
    GET_MOVIES, 
    SET_LOADING, 
    GET_SEARCH_VALUE,
    ADD_TO_FAVOURITES,
    REMOVE_FAVOURITE,
    ALREADY_IN_FAVOURITES
} from './types'
import axios from 'axios'

//get value from search movie form
export const getSearchValue = value => dispatch => {
    dispatch({
        type: GET_SEARCH_VALUE,
        payload: value
    })
}

// gets movie from the API endpoint
export const getMovies = movie => async dispatch => {
    try {
        setLoading()
        const res = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        if (res.data.Response !== 'False') {
            console.log(res.data)
            dispatch({
                type: GET_MOVIES,
                payload: res.data.Search
            })              
        }      
    } catch (error) {
        console.error(error)
    }
}

export const addToFavourites = movie => dispatch => {
    console.log(movie)
    dispatch({
        type: ADD_TO_FAVOURITES,
        payload: movie
    })
}

export const removeFavourite = id => dispatch => {
    dispatch({
        type: REMOVE_FAVOURITE,
        payload: id
    })
}

export const alreadyInFavourites = movieTitle => dispatch => {
    dispatch({
        type: ALREADY_IN_FAVOURITES,
        payload: movieTitle
    })
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}