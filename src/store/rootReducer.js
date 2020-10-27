import { combineReducers } from 'redux'

import ManagerReducer from './reducers/ManagerReducer'

const rootReducer = combineReducers({
    manager: ManagerReducer,
})

export default rootReducer