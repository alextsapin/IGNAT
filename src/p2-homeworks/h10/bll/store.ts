import {loadingReducer} from './loadingReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const reducers = combineReducers({
    loading: loadingReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>