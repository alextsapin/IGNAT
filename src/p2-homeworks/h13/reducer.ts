import {Dispatch} from 'redux';
import { ignatApi } from './api';

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

export const hw13Reducer = (state = initialState, action: any): any   => {
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
export const setInfo = (error: boolean): any => {
    return (dispatch: Dispatch) => {
        ignatApi.sendRequest(error).then((response) => {
            dispatch(setInfoAC(response.errorText, response.info))
        })
    }
}