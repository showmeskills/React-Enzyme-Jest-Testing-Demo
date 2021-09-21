
export enum ListActionsTypes{
    GET_LISTS = "GET_LISTS",
    GET_LISTS_START = "GET_LISTS_START",
    GET_LISTS_SUCCESS = "GET_LISTS_SUCCESS",
    GET_LISTS_FAILED = "GET_LISTS_FAILED",
    GET_SPEC_LIST = "GET_SPEC_LIST",
    GET_SPEC_LIST_START = "GET_SPEC_LIST_START",
    GET_SPEC_LIST_SUCCESS = "GET_SPEC_LIST_SUCCESS",
    GET_SPEC_LIST_FAILED = "GET_SPEC_LIST_FAILED"
}


export interface List{
    userId:string,
    id:string,
    title:string,
    body:string,
}

export interface Get_Lists_Start{
    type: typeof ListActionsTypes.GET_LISTS_START;
    loading:boolean;
    payload:[];
    error:string
}

export interface Get_Lists_Success{
    type: typeof ListActionsTypes.GET_LISTS_SUCCESS
    loading:boolean;
    payload:List[];
    error:string
}

export interface Get_Lists_Failed{
    type:typeof ListActionsTypes.GET_LISTS_FAILED
    loading:boolean;
    payload:[];
    error:string;
}

export interface Get_List_len{
    type:typeof ListActionsTypes.GET_SPEC_LIST
    length:number
}

export interface Get_Spec_List_Start{
    type:ListActionsTypes.GET_SPEC_LIST_START;
    loading:boolean;
    payload:[];
    error:string;
}

export interface Get_Spec_List_Success{
    type:ListActionsTypes.GET_SPEC_LIST_SUCCESS;
    loading:boolean;
    payload:List[];
    error:string;
}
export interface Get_Spec_List_Failed{
    type:ListActionsTypes.GET_SPEC_LIST_FAILED;
    loading:boolean;
    payload:[];
    error:string;
}





export type ListActions = 
Get_Lists_Start |
Get_Lists_Success | 
Get_Lists_Failed | 
Get_Spec_List_Start | 
Get_Spec_List_Success | 
Get_Spec_List_Failed;