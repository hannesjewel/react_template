import {
    UPDATE_USER,
    UPDATE_USER_FAILED,
    RESET_FORMS
} from '../../actions/types'

const initialState = {}

const updateReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USER:
            return {
                details: action.payload,
                success: 'User updated successfully',
            }
        case UPDATE_USER_FAILED:
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

export default updateReducer