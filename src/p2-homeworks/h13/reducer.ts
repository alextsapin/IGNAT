import {Dispatch} from 'redux';
import {ignatApi} from './api';
import {AppThunkType} from '../h10/bll/store';

export type responseType = {
    errorText: string
    info: string
}

type stateType = {
    isFetching: boolean
    error: boolean,
    response: responseType
}

const initialState: stateType = {
    isFetching: false,
    error: false,
    response: {
        errorText: '...',
        info: '...'
    }
}

type totalType = ReturnType<typeof setErrorAC> | ReturnType<typeof setInfoAC> | ReturnType<typeof toggleFetchingAC>

export const hw13Reducer = (state = initialState, action: totalType): stateType => {
    switch(action.type) {   

        case 'SET_ERROR': {
            return {
                ...state, error: action.error
            }
        }

        case 'TOGGLE_FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }

        case 'SET_INFO': {
            return {
                ...state, response: {
                    errorText: action.errorText,
                    info: action.info
                }
            }
        }

        default: {
            return state
        }
    }
}

export const setErrorAC = (error: boolean) => {
    return {
        type: 'SET_ERROR' as const,
        error
    }
}

export const toggleFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_FETCHING' as const,
        isFetching
    }
}

const setInfoAC = (errorText: string, info: string) => {
    return {
        type: 'SET_INFO' as const,
        errorText,
        info
    }
}

// Thunk creators
export const setInfo = (error: boolean): AppThunkType => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFetchingAC(true))
        ignatApi.sendRequest(error).then((response) => {
            dispatch(setInfoAC(response.errorText, response.info))
            dispatch(toggleFetchingAC(false))
        })
    }
}