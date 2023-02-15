import _ from 'lodash'
import {
    FETCH_USERS,
    CREATE_USER,
    FETCH_USER,
    UPDATE_USER,
    DELETE_USER,
    RESTORE_USER
} from '../../actions/types'

const initialState = {}

const indexReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            return {
                ...state, ..._.mapKeys(action.payload, 'id')
            }
        case CREATE_USER:
            return {
                ...state, [action.payload.id]: action.payload
            }
        case FETCH_USER:
            return {
                ...state, [action.payload.id]: action.payload
            }
        case UPDATE_USER:
            return {
                ...state, [action.payload.id]: action.payload
            }   
        case RESTORE_USER:
            return {
                ...state, [action.payload.id]: action.payload
            } 
        case DELETE_USER:
            return _.omit(state, action.payload)
        default:
            return state
    }
}

export default indexReducer