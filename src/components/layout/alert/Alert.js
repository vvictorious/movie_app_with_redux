import React from 'react'
import { connect } from 'react-redux'

const Alert = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    moviesData: state.movieReducer    
}

export default connect(mapStateToProps, {alreadyInFavourites})(Alert)