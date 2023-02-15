import {
  FORGOT_PASSWORD_OTP,
  FORGOT_PASSWORD_OTP_FAILED
} from '../actions/types'

const initialState = {
  errors: null,
  success: null
}

const forgotPasswordOtpReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_OTP:
      return {
        success: action.payload,
        errors: null
      }
    case FORGOT_PASSWORD_OTP_FAILED:
      return {
        success: null,
        errors: action.payload
      }
      default:
          return state
  }
}

export default forgotPasswordOtpReducer