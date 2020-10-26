import { combineReducers } from 'redux'
import EmployeeReducer from './reducers/EmployeeReducer'

import ManagerReducer from './reducers/ManagerReducer'

const rootReducer = combineReducers({
    manager: ManagerReducer,
    employee: EmployeeReducer,
})

export default rootReducer