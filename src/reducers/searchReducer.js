import { GET_MOVIES, SET_LOADING } from '../actions/types'

const initialState = {
    movies: null,
    loading: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        default: 
            return state
    }
}

export default searchReducer