import React, {Fragment} from 'react'
import { connect } from 'react-redux'

const Alert = ({ moviesData: {duplicateFave}}) => {
    console.log(duplicateFave)
    if (duplicateFave !== null) {
        return (
            <div className='text-center'>
                <h1>
                <span className='text-danger'>
                    {duplicateFave + ' '}
                </span>
                is already in your Favourites List</h1>
            </div>
        )
    } else {
        return <Fragment></Fragment>
    }
}

const mapStateToProps = state => ({
    moviesData: state.movieReducer    
})

export default connect(mapStateToProps)(Alert)