import {ListActionsTypes} from "../../interface/saga-type"
import { defaultState, listReducer } from "./listReudcer";

describe("list-reducer should", () => {
    it("return default state", () => {
        const state = {
            loading: false,
            payload: [],
            error: ""
        };
        const newState = listReducer(defaultState, {});
        expect(newState).toEqual(state);
    })
    it("return a new state if get lists start",()=>{
        const state = {
            loading: true,
            payload: [],
            error: ""
        };
        const newState = listReducer(state,{
            type:ListActionsTypes.GET_LISTS_START,
            loading:true,
            payload:[],
            error:""
        });
        expect(newState).toEqual(state);
    })
    it("return a new state if get lists success",()=>{
        const state = {
            loading:false,
            payload:[{
                id:"Test1",
                userId:"Test1",
                body:"Test1",
                title:"Test1",
            }],
            error:""
        }
        const newState = listReducer(state,{
            type:ListActionsTypes.GET_LISTS_SUCCESS,
            loading:state.loading,
            payload:state.payload,
            error:state.error
        })
        expect(newState).toEqual(state);
    })
    it("return a new state if get lists failed",()=>{
        const state = {
            loading:false,
            payload:[],
            error:"Test error"
        }
        const newState = listReducer(state,{
            type:ListActionsTypes.GET_SPEC_LIST_FAILED,
            loading:false,
            payload:[],
            error:"Test error",
        })
        expect(newState).toEqual(state);
    })
    it("return a new state if get spec lists start",()=>{
        const state = {
            loading: true,
            payload: [],
            error: ""
        };
        const newState = listReducer(state,{
            type:ListActionsTypes.GET_SPEC_LIST_START,
            loading:true,
            payload:[],
            error:""
        });
        expect(newState).toEqual(state);
    })
    it("return a new state if get spec lists success",()=>{
        const state = {
            loading: false,
            payload:[{
                id:"Test1",
                userId:"Test1",
                body:"Test1",
                title:"Test1",
            }],
            error: ""
        };
        const newState = listReducer(state,{
            type:ListActionsTypes.GET_SPEC_LIST_START,
            loading:false,
            payload:state.payload,
            error:""
        });
        expect(newState).toEqual(state);
    })
    it("return a new state if get spec lists failed",()=>{
        const state = {
            loading: false,
            payload: [],
            error: "Test error"
        };
        const newState = listReducer(state,{
            type:ListActionsTypes.GET_SPEC_LIST_START,
            loading:false,
            payload:[],
            error:state.error
        });
        expect(newState).toEqual(state);
    })
})