import {
    FETCH_ACCOUNT_DETAILS,
    UPDATE_ACCOUNT,
    UPDATE_ACCOUNT_FAILED,
    SIGNOUT
} from '../actions/types'

const initialState = {}

const accountReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ACCOUNT_DETAILS:
            return {
                details: action.payload
            }
        case UPDATE_ACCOUNT:
            return {
                details: action.payload,
                success: true,
                errors: null
            }
        case UPDATE_ACCOUNT_FAILED:
            return {
                ...state,
                errors: action.payload,
                success: null
            }
        case SIGNOUT:
            return initialState
        default:
            return state
    }
}

export default accountReducer