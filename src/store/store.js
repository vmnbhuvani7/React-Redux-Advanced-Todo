import { combineReducers, createStore } from 'redux'
import ManagerReducer from './reducers/ManagerReducer'

const rootReducer = combineReducers({
    ManagerReducer,
})
const store = createStore(rootReducer)
// const store = createStore(ManagerReducer)
console.log(store.getState())

export default store