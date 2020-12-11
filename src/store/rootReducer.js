import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ManagerReducer from './reducers/ManagerReducer'

const  persistConfig ={
    key:'root',
    storage,
    whitelist:['manager']
}

const rootReducer = combineReducers({
    manager: ManagerReducer,
})

export default persistReducer(persistConfig,rootReducer)