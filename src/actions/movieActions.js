import { 
    GET_MOVIES, 
    SET_LOADING, 
    GET_SEARCH_VALUE,
    ADD_TO_FAVOURITES,
    REMOVE_FAVOURITE,
    ALREADY_IN_FAVOURITES,
    SET_DUPLICATE_TO_NULL,
    SET_FAVOURITES
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
        let movieAppApi;
        
        if (process.env.NODE_ENV !== 'production') {
            movieAppApi = process.env.REACT_APP_MOVIE_API_KEY
        } else {
            movieAppApi = process.env.MOVIE_API_KEY
        }        
        setLoading()
        const res = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=${movieAppApi}`)
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

export const setFavourites = favouritesArray => dispatch => {
    dispatch({
        type: SET_FAVOURITES,
        payload: favouritesArray
    })
}

export const addToFavourites = movie => dispatch => {
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
    setTimeout( () => {
        dispatch({
            type: SET_DUPLICATE_TO_NULL,
        })
    },3000)
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}