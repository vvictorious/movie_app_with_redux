import { GET_MOVIES, SET_LOADING } from './types'
import axios from 'axios'

// gets movie from the db
export const getMovies = movie => async dispatch => {
    try {
        const res = await axios.get(`http://www.omdbapi.com/?s=star wars&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        console.log(res)
        dispatch({
            type: GET_MOVIES,
            payload: res.data
        })        
    } catch (error) {
        console.log(error)
    }
}