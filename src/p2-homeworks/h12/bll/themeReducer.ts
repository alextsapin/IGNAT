export type themeType = 'white' | 'some' | 'red' | 'dark'

type stateType = {
    theme: themeType
}

const initState: stateType = {
    theme: 'some'
}

export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeAC>): stateType => {
    switch (action.type) {
        case "SET_THEME": {
            return {
                ...state, theme: action.theme
            }
        }

        default: 
        return state;
    }
}

export default themeReducer;

export const changeThemeAC = (theme: themeType) => {
    return {
        type: 'SET_THEME' as const,
        theme
    }
}