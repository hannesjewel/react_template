import {
    CREATE_USER,
    CREATE_USER_FAILED,
    RESET_FORMS
} from '../../actions/types'

const initialState = {}

const createReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_USER:
            return {
                details: action.payload,
                success: 'User created successfully',
            }
        case CREATE_USER_FAILED:
            return {
                ...state,
                errors: action.payload,
                success: null
            }
        case RESET_FORMS:
            return initialState
        default:
            return state
    }
}

export default createReducer