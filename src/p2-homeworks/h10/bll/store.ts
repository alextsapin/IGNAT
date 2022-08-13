import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {loadingReducer} from './loadingReducer';
import {hw13Reducer} from '../../h13/reducer';


const reducers = combineReducers({
    loading: loadingReducer,
    hw13: hw13Reducer

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>