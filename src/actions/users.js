import admin from '../apis/admin'

import {
    FETCH_USERS,
    CREATE_USER,
    CREATE_USER_FAILED,
    FETCH_USER,
    UPDATE_USER,
    UPDATE_USER_FAILED,
    DELETE_USER,
    RESTORE_USER,
    FETCH_USERS_BIN,
    FORCE_DELETE_USER,
    
} from './types'

export const fetchUsers = token => async dispatch => {
  try {
      const config = { 
          headers: { 
              Authorization: `Bearer ${token}` 
          } 
      };
      
      const response = await admin.get('admin/users', config)

      dispatch({
          type: FETCH_USERS,
          payload: response.data
      })
      
  } catch (error) {
      console.log('fetching users failed')
  }
}

export const createUser = (token, formValues) => async dispatch => {
  try {
      const config = { 
          headers: { 
              Authorization: `Bearer ${token}` 
          } 
      };
      
      const response = await admin.post('admin/users/create', formValues, config)

      dispatch({
          type: CREATE_USER,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: CREATE_USER_FAILED,
          payload: error.response ? error.response.data : null
      })
  }
}

export const fetchUser = (token, id) => async dispatch => {
  try {
      const config = { 
          headers: { 
              Authorization: `Bearer ${token}` 
          } 
      };
      
      const response = await admin.get('admin/users/'+id, config)

      dispatch({
          type: FETCH_USER,
          payload: response.data
      })
      
  } catch (error) {
      console.log('fetching user failed')
  }
}


export const updateUser = (token, id, formValues) => async dispatch => {
  try {
      const config = { 
          headers: { 
              Authorization: `Bearer ${token}` 
          } 
      };
      
      const response = await admin.post('admin/users/'+id+'/update', formValues, config)

      dispatch({
          type: UPDATE_USER,
          payload: response.data
      })
      
  } catch (error) {
      dispatch({
          type: UPDATE_USER_FAILED,
          payload: error.response ? error.response.data : null
      })
  }
}

export const deleteUser = (token, id) => async dispatch => {
  try {
      const config = { 
          headers: { 
              Authorization: `Bearer ${token}` 
          } 
      };
      
      await admin.post('admin/users/'+id+'/delete', {}, config)

      dispatch({
          type: DELETE_USER,
          payload: id
      })
      
  } catch (error) {
      console.log('delete user failed')
  }
}

export const fetchUsersBin = token => async dispatch => {
    try {
        const config = { 
            headers: { 
                Authorization: `Bearer ${token}` 
            } 
        };
        
        const response = await admin.get('admin/users/bin', config)
  
        dispatch({
            type: FETCH_USERS_BIN,
            payload: response.data
        })
        
    } catch (error) {
        console.log('fetch users bin failed')
    }
  }
  
  export const restoreUser = (token, id) => async dispatch => {
    try {
        const config = { 
            headers: { 
                Authorization: `Bearer ${token}` 
            } 
        };
        
        const response = await admin.post('admin/users/'+id+'/restore', {}, config)
  
        dispatch({
            type: RESTORE_USER,
            payload: response.data
        })
        
    } catch (error) {
        console.log('User restore failed')
    }
  }
  
  export const forceDeleteUser = (token, id) => async dispatch => {
    try {
        const config = { 
            headers: { 
                Authorization: `Bearer ${token}` 
            } 
        };
        
        await admin.post('admin/users/' + id + '/delete', {}, config)
  
        dispatch({
            type: FORCE_DELETE_USER,
            payload: id
        })
        
    } catch (error) {
        console.log('Force delete user failed')        
    }
  }