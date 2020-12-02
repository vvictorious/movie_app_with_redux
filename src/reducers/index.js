import { combineReducers } from 'redux'
import movieReducer from './movieReducer'

//this is where I will be importing differents reducers and passing them into the combineReducers method below
export default combineReducers({
    movies: movieReducer
})