import {defaultState, listReducer} from "./listReducer/listReudcer";
import {createStore} from "redux";
import { rootReducer } from './rootReducer';
import {ListActionsTypes} from "../interface/saga-type";
describe("rootReducer should",()=>{
    let store = createStore(rootReducer);
    it("return combine reducers",()=>{
       
        expect(store.getState().listReducer).toEqual(listReducer(defaultState,{}))
    })
    it("return action to get lists start",()=>{
        const state = {
            loading: true,
            list: [],
            error: ""
        };
        let action = {type:ListActionsTypes.GET_LISTS_START}
        store.dispatch(action)
        expect(store.getState().listReducer).toEqual(listReducer(state,action));
    })
    it("return action to get lists success",()=>{
        const state = {
            loading:false,
            list:[{
                id:"Test1",
                userId:"Test1",
                body:"Test1",
                title:"Test1",
            }],
            error:""
        }
        let action = {type:ListActionsTypes.GET_LISTS_SUCCESS}
        store.dispatch(action)
        expect(store.getState().listReducer).toEqual(listReducer(state,action));
    })
    it("return action to get lists failed",()=>{
        const state = {
            loading:false,
            list:[],
            error:"Test error"
        }
        let action = {type:ListActionsTypes.GET_LISTS_FAILED}
        store.dispatch(action)
        expect(store.getState().listReducer).toEqual(listReducer(state,action));
    })
    it("return action to get spec lists start",()=>{
        const state = {
            loading: true,
            list: [],
            error: ""
        };
        let action = {type:ListActionsTypes.GET_SPEC_LIST_START,length:0}
        store.dispatch(action)
        expect(store.getState().listReducer).toEqual(listReducer(state,action));
    })
    it("return action to get spec lists success",()=>{
        const state = {
            loading: false,
            list:[{
                id:"Test1",
                userId:"Test1",
                body:"Test1",
                title:"Test1",
            }],
            error: ""
        };
        let action = {type:ListActionsTypes.GET_SPEC_LIST_SUCCESS,length:0}
        store.dispatch(action)
        expect(store.getState().listReducer).toEqual(listReducer(state,action));
    })
    it("return action to get spec lists failed",()=>{
        const state = {
            loading: false,
            list:[],
            error: "Test Error"
        };
        let action = {type:ListActionsTypes.GET_SPEC_LIST_FAILED,length:0}
        store.dispatch(action)
        expect(store.getState().listReducer).toEqual(listReducer(state,action));
    })
})