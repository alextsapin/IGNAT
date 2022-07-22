import {stateType} from '../HW8';
import {sortUpAction, sortDownAction, check18Action} from '../HW8'
import {sortUpActionType, sortDownActionType, check18ActionType} from '../HW8'

type actionsType = sortUpActionType | sortDownActionType | check18ActionType

export const homeWorkReducer = (state: stateType, action: actionsType): stateType => {
    switch (action.type) {
        case 'SORT_UP': {
            return [...state].sort(function(a, b) {
                if(a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                } else {
                    return 1
                } 
            })
        }

        case 'SORT_DOWN': {
            return [...state].sort(function(a, b) {
                if(a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1
                } else {
                    return 1
                } 
            })
        }

        case 'CHECK_18': {
            return state.filter(item => item.age > 18)
        }
        default: return state
    }
}