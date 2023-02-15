import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FAILED,
  RESET_FORMS
} from '../actions/types'

const initialState = {
  errors: null,
  success: null
}

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        success: true,
        errors: null
      }
    case FORGOT_PASSWORD_FAILED:
      return {
        success: null,
        errors: action.payload
      }
      case RESET_FORMS:
          return initialState
      default:
          return state
  }
}

export default forgotPasswordReducer