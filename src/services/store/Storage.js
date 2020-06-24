import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import AllReducer from './AllReducers'

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const storeReducer = persistReducer(persistConfig, AllReducer)

export const Store = createStore(storeReducer, applyMiddleware(thunk))
export const Persistor = persistStore(Store)
