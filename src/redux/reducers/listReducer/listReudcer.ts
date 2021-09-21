import { List, ListActions, ListActionsTypes } from "../../interface/saga-type";

interface IdefaultState {
    loading: boolean;
    list: Array<List>;
    error: string;
}

export const defaultState: IdefaultState = {
    loading: false,
    list: [],
    error: ""
}

export const listReducer = (state = defaultState, action: ListActions | any): IdefaultState => {
    switch (action.type) {
        case ListActionsTypes.GET_LISTS_START:
            return { loading: action.loading, list: action.payload, error: action.error }
        case ListActionsTypes.GET_LISTS_SUCCESS:
            return { loading: action.loading, list: action.payload, error: action.error }
        case ListActionsTypes.GET_LISTS_FAILED:
            return { loading: action.loading, list: action.payload, error: action.error }
        case ListActionsTypes.GET_SPEC_LIST_START:
            return { loading: action.loading, list: action.payload, error: action.error }
        case ListActionsTypes.GET_SPEC_LIST_SUCCESS:
            return { loading: action.loading, list: action.payload, error: action.error }
        case ListActionsTypes.GET_SPEC_LIST_FAILED:
            return { loading: action.loading, list: action.payload, error: action.error }
        default:
            return state;
    }
}