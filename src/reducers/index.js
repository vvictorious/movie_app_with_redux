import { combineReducers } from 'redux'
import searchReducer from './searchReducer'

//this is where I will be importing differents reducers and passing them into the combineReducers method below
export default combineReducers({
    searchValue: searchReducer
})