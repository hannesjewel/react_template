import {
  FORGOT_PASSWORD_RESET,
  FORGOT_PASSWORD_RESET_FAILED
} from '../actions/types'

const initialState = {
  errors: null,
  success: null
}

const forgotPasswordResetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_RESET:
      return {
        success: true,
        errors: null
      }
    case FORGOT_PASSWORD_RESET_FAILED:
      return {
        success: null,
        errors: action.payload
      }
      default:
          return state
  }
}

export default forgotPasswordResetReducer