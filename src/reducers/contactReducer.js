import {
    SEND_CONTACT_EMAIL,
    SEND_CONTACT_EMAIL_FAILED,
    RESET_FORMS
} from '../actions/types'

const initialState = {}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_CONTACT_EMAIL:
            return {
                success: action.payload
            }
        case SEND_CONTACT_EMAIL_FAILED:
            return {
                errors: action.payload
            }
        case RESET_FORMS:
            return initialState
        default:
            return state
    }
}

export default contactReducer