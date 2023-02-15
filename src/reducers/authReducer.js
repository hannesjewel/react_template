import {
  SIGNUP,
  SIGNUP_FAILED,
  SIGNIN,
  SIGNIN_FAILED,
  SIGNOUT
} from '../actions/types'

const initialState = {}

const authReducer = (state = initialState, action) => {
  switch(action.type){
      case SIGNUP:
          return {
              success: true
          }
      case SIGNUP_FAILED:
          return {
              errors: action.payload
          }
      case SIGNIN:
          return {
              token: action.payload
          }
      case SIGNIN_FAILED:
          return {
              errors: action.payload
          }
      case SIGNOUT:
          return initialState
      default:
          return state
  }
}

export default authReducer