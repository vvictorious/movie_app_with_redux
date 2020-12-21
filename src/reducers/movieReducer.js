import { 
    GET_SEARCH_VALUE, 
    GET_MOVIES, 
    SET_LOADING,
    ADD_TO_FAVOURITES,
    REMOVE_FAVOURITE,
    ALREADY_IN_FAVOURITES,
    SET_DUPLICATE_TO_NULL,
    SET_FAVOURITES
} from '../actions/types'

const initialState = {
    movies: [],
    favourites: [],
    searchValue: '',
    loading: false,
    duplicateFave: null
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
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case SET_FAVOURITES:
            return {
                ...state,
                favourites: action.payload
            }
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(favourite => favourite.imdbID !== action.payload)
            }
        case ALREADY_IN_FAVOURITES:
            return {
                ...state,
                duplicateFave: action.payload
            }
        case SET_DUPLICATE_TO_NULL:
            return {
                ...state,
                duplicateFave: null
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