import {Dispatch} from 'redux';
import {ignatApi} from './api';
import {AppThunkType} from '../h10/bll/store';

export type responseType = {
    errorText: string
    info: string
}

type stateType = {
    error: boolean,
    response: responseType
}

const initialState: stateType = {
    error: false,
    response: {
        errorText: '...',
        info: '...'
    }
}

export const hw13Reducer = (state = initialState, action: ReturnType<typeof setErrorAC> | ReturnType<typeof setInfoAC>): stateType => {
    switch(action.type) {   

        case 'SET_ERROR': {
            return {
                ...state, error: action.error
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
        ignatApi.sendRequest(error).then((response) => {
            dispatch(setInfoAC(response.errorText, response.info))
        })
    }
}