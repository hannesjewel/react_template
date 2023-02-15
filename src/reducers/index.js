import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactReducer from './contactReducer'
import authReducer from './authReducer'
import accountReducer from './accountReducer'

import forgotPasswordReducer from './forgotPasswordReducer'
import forgotPasswordOtpReducer from './forgotPasswordOtpReducer'
import forgotPasswordResetReducer from './forgotPasswordResetReducer'

import usersReducer from './users/indexReducer'
import usersBinReducer from './users/binReducer'
import userCreateReducer from './users/createReducer'
import userUpdateReducer from './users/updateReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["authState"]
}

const rootReducer = combineReducers({
    authState: authReducer,
    accountState: accountReducer,
    contactState: contactReducer,
    forgotPasswordState: forgotPasswordReducer,
    forgotPasswordOtpState: forgotPasswordOtpReducer,
    forgotPasswordResetState: forgotPasswordResetReducer,
    usersState: usersReducer,
    usersBinState: usersBinReducer,
    userCreateState: userCreateReducer,
    userUpdateState: userUpdateReducer,
    form: formReducer
})

export default persistReducer(persistConfig, rootReducer)