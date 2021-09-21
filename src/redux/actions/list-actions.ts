import {ListActionsTypes,List,ListActions} from "../interface/saga-type"

export const getAllListsStart = ():ListActions=>{
    return {
        type:ListActionsTypes.GET_LISTS_START,
        loading:true,
        payload:[],
        error:"",
    }
}

export const getAllListsSuccess = (payload:List[]):ListActions=>{
    return {
        type:ListActionsTypes.GET_LISTS_SUCCESS,
        loading:false,
        payload,
        error:""
    }
}

export const getAllListsFailed = (error:string):ListActions=>{
    return {
        type:ListActionsTypes.GET_LISTS_FAILED,
        loading:false,
        payload:[],
        error,
    }
}

export const getSpecListsStart = ():ListActions=>({
    type:ListActionsTypes.GET_SPEC_LIST_START,
    loading:true,
    payload:[],
    error:"",
})

export const getSpecListsSuccess = (payload:List[]):ListActions=>({
    type:ListActionsTypes.GET_SPEC_LIST_SUCCESS,
    loading:false,
    payload,
    error:""
})

export const getSpecListsFailed = (error:string):ListActions=>({
    type:ListActionsTypes.GET_SPEC_LIST_FAILED,
    loading:false,
    payload:[],
    error,
})
