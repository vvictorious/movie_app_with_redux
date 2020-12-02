import { GET_MOVIES, SET_LOADING } from './types'
import axios from 'axios'

// gets movie from the db
export const getMovies = movie => async dispatch => {
    try {
        setLoading()
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