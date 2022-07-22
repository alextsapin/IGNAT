type stateType = {
    loading: boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: loadingACType): stateType => {
    switch (action.type) {
        case 'TOGGLE_FETCHING': {
            return {...state, loading: action.loading}
        }

        default: return state
    }
}

type loadingACType = {
    type: 'TOGGLE_FETCHING',
    loading: boolean
}

export const loadingAC = (loading: boolean): loadingACType => {
    return {
        type: 'TOGGLE_FETCHING' as const,
        loading
    }
}