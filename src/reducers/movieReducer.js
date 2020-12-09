import { GET_SEARCH_VALUE, GET_MOVIES, SET_LOADING } from '../actions/types'

const initialState = {
    movies: [],
    searchValue: '',
    loading: false
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case SET_LOADING:
                return {
                    ...state,
                    loading: true
                }
        default: 
            return state
    }
}

export default moviesReducer