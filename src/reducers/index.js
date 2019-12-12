import counterReducer from './counter'
import isLoggedReducer from './isLogged'
import {combineReducers} from 'redux'


const rootReducers=combineReducers({
    counterReducer,
    isLoggedReducer
})

export default rootReducers;