import {stateType} from '../HW8';
import {sortUpAction, sortDownAction, check18Action} from '../HW8'
import {sortUpActionType, sortDownActionType, check18ActionType} from '../HW8'

type actionsType = sortUpActionType | sortDownActionType | check18ActionType

export const homeWorkReducer = (state: stateType, action: actionsType): stateType => {
    switch (action.type) {
        case 'SORT_UP': {
            return {
                ...state
            }
        }

        case 'SORT_DOWN': {
            // need to fix
            return state
        }

        case 'CHECK_18': {
            return state.filter(item => item.age > 18)
        }
        default: return state
    }
}