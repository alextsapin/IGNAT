import {legacy_createStore as createStore, combineReducers, applyMiddleware, AnyAction} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {loadingReducer} from './loadingReducer';
import {hw13Reducer} from '../../h13/reducer';
import {themeReducer} from '../../h12/bll/themeReducer';


const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    hw13: hw13Reducer

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>
export type AppDispatch = ThunkDispatch<AppStoreType, unknown, AnyAction>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AnyAction>