import _ from 'lodash'
import {
    FETCH_USERS_BIN,
    RESTORE_USER,
    FORCE_DELETE_USER
} from '../../actions/types'

const initialState = {}

const binReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_BIN:
            return {
                ...state, ..._.mapKeys(action.payload, 'id')
            }  
        case RESTORE_USER:
            return _.omit(state, action.payload.id)
        case FORCE_DELETE_USER:
            return _.omit(state, action.payload)
        default:
            return state
    }
}

export default binReducer