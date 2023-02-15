import {
    createStore, 
    applyMiddleware,
    compose
} from 'redux'
import { persistStore } from 'redux-persist'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [reduxThunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)