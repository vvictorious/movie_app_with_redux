import { GET_MOVIES, SET_LOADING, GET_SEARCH_VALUE } from './types'
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
        console.log('getmovies ran')
        const res = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        dispatch({
            type: GET_MOVIES,
            payload: res.data.Search
        })        
    } catch (error) {
        console.log(error)
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}