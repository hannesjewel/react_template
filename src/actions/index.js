import admin from '../apis/admin'
import {
    RESET_FORMS,
    SEND_CONTACT_EMAIL,
    SEND_CONTACT_EMAIL_FAILED,
    SIGNUP,
    SIGNUP_FAILED,
    SIGNIN,
    SIGNIN_FAILED,
    SIGNOUT,
    FETCH_ACCOUNT_DETAILS,
    UPDATE_ACCOUNT,
    UPDATE_ACCOUNT_FAILED,
} from './types'

export const resetForms = () => {
  return (dispatch) => {
      dispatch({
          type: RESET_FORMS
      })
  }
}

export const sendContactMessage = formValues => async dispatch => {

  try {

      const response = await admin.post('contact/', formValues)

      dispatch({
          type: SEND_CONTACT_EMAIL,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: SEND_CONTACT_EMAIL_FAILED,
          payload: error.response ? error.response.data : null
      })
  }
}

export const signUp = formValues => async dispatch => {

  try {

      const response = await admin.post('user/create', formValues)

      dispatch({
          type: SIGNUP,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: SIGNUP_FAILED,
          payload: error.response ? error.response.data : null
      })
  }
}

export const signIn = formValues => async dispatch => {

  try {

      const response = await admin.post('user/login', formValues)

      dispatch({
          type: SIGNIN,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: SIGNIN_FAILED,
          payload: error.response ? error.response.data : null
      })
  }
}

export const signOut = token => async dispatch => {
  try {

      const config = { 
          headers: { 
              Authorization: `Bearer ${token}` 
          } 
      };
      
      const response = await admin.post('admin/user/logout', {}, config)

      dispatch({
          type: SIGNOUT,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: SIGNOUT,
          payload: error.response ? error.response.data : null
      })
  }
}

export const fetchAccount = token => async dispatch => {
    try {
  
        const config = { 
            headers: { 
                Authorization: `Bearer ${token}` 
            } 
        };
        
        const response = await admin.post('admin/user/details', {}, config)
  
        dispatch({
            type: FETCH_ACCOUNT_DETAILS,
            payload: response.data
        })
        
    } catch (error) {
        console.log('fetch account details failed')
    }
}


export const updateAccount = (token, formValues) => async dispatch => {
    try {
  
        const config = { 
            headers: { 
                Authorization: `Bearer ${token}` 
            } 
        };
        
        const response = await admin.post('admin/user/update', formValues, config)
  
        dispatch({
            type: UPDATE_ACCOUNT,
            payload: response.data
        })
        
    } catch (error) {
        dispatch({
            type: UPDATE_ACCOUNT_FAILED,
            payload: error.response ? error.response.data : null
        })
    }
}