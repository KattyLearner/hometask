import {User, UserType} from "../HW8";

type ActionType = SortActionType | CheckAgeActionType

type SortActionType = {
        type: 'sort'
        payload: 'up' | 'down'
}

type CheckAgeActionType = {
    type: 'check'
    payload: number
}


export const homeWorkReducer = (state: UserType, action: ActionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const stateCopy = [...state].sort((a: User, b: User) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return  -1
                else return 0
            })
            return action.payload === 'up' ? stateCopy : stateCopy.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(u => u.age === action.payload)
        }
        default: return state
    }
}