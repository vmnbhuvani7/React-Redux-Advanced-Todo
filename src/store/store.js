import { createStore } from 'redux'
import { persistStore } from 'redux-persist';
import persistReducer from './rootReducer'

export let store = createStore(persistReducer);

export const persistor = persistStore(store);

export default { store, persistor };