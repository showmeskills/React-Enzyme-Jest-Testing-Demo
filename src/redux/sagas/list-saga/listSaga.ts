import { takeEvery,put,call,StrictEffect,delay,cancelled } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { getAllLists } from "../../../services/axios";
import {ListActionsTypes,List,Get_List_len} from "../../interface/saga-type";
import {
    getAllListsStart,
    getAllListsSuccess, 
    getAllListsFailed,
    getSpecListsStart,
    getSpecListsSuccess,
    getSpecListsFailed
} from "../../actions/list-actions";


export function * get_ALl_Lists():any{
    try{
            yield put(getAllListsStart())
            const result:AxiosResponse<List[]> = yield call(getAllLists,"posts");
            yield put(getAllListsSuccess(result.data))
            delay(1000)
    }catch(err){
            yield put(getAllListsFailed("get_All_lists error"))
    }finally{
        const result:boolean = yield cancelled();
        if(result){
            yield put(getAllListsFailed("get_All_lists cancelled"))
        }
    }
}

export function * get_Spec_Lists({length}:Get_List_len){
    try{
        yield put(getSpecListsStart());
        const result:AxiosResponse<List[]> = yield call(getAllLists,`posts?_limit=${length}`)
        yield put(getSpecListsSuccess(result.data))
        delay(1000)
    }catch(err){
        yield put(getSpecListsFailed("get_All_lists error"))
    }finally{
        const result:boolean = yield cancelled();
        if(result){
            yield put(getSpecListsFailed("get_All_lists cancelled"))
        }
    }
}

export function * watchListSaga():Generator<StrictEffect>{
    yield takeEvery(ListActionsTypes.GET_LISTS,get_ALl_Lists)
    yield takeEvery(ListActionsTypes.GET_SPEC_LIST,get_Spec_Lists)
}

