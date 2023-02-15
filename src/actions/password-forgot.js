import admin from '../apis/admin'

import {
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_FAILED,
    FORGOT_PASSWORD_OTP,
    FORGOT_PASSWORD_OTP_FAILED,
    FORGOT_PASSWORD_RESET,
    FORGOT_PASSWORD_RESET_FAILED
} from './types'

export const forgotPassword = formValues => async dispatch => {
  try {

      const response = await admin.post('password/email', formValues)

      dispatch({
          type: FORGOT_PASSWORD,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: FORGOT_PASSWORD_FAILED,
          payload: error.response ? error.response.data : null
      })
  }
}

export const forgotPasswordOtp = formValues => async dispatch => {
  try {

      const response = await admin.post('password/code/check', formValues)

      dispatch({
          type: FORGOT_PASSWORD_OTP,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: FORGOT_PASSWORD_OTP_FAILED,
          payload: error.response ? error.response.data : null
      })
  }
}

export const forgotPasswordReset = formValues => async dispatch => {
  try {

      const response = await admin.post('password/reset', formValues)

      dispatch({
          type: FORGOT_PASSWORD_RESET,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: FORGOT_PASSWORD_RESET_FAILED,
          payload: error.response ? error.response.data : null
      })
  }
}