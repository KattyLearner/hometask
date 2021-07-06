import {AppStoreType} from "./store";

const initState = {
isLoading: false
};

type LoadingACType = {
    type: 'SET-LOADING'
    isLoad: boolean
}

export const loadingReducer = (state = initState, action: LoadingACType): typeof initState => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return { ...state,
                isLoading: action.isLoad
            };
        }
        default: return state;
    }
};

export const loadingAC = (isLoad: boolean): LoadingACType => { return {type: 'SET-LOADING', isLoad }}; // fix any