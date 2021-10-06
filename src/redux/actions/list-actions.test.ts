import moxios from "moxios";
import { testStore } from "../../Utils";
import { ListActionsTypes } from "../interface/saga-type";
import {
    getAllListsStart,
    getAllListsSuccess,
    getAllListsFailed,
    getSpecListsStart,
    getSpecListsSuccess,
    getSpecListsFailed,
} from "./list-actions"

describe("action is running", () => {
    describe("get all lists action",()=>{
        beforeEach(()=>{
            moxios.install()
        });
        afterEach(()=>{
            moxios.uninstall()
        })
        it("store is start correctly", async()=>{
            const expectedState = {
                loading:true,
                payload:[],
                error:"",
            }
            const store = testStore();
    
            moxios.wait(()=>{
                const requests = moxios.requests.mostRecent();
                requests.respondWith({
                    status:200,
                    response:expectedState
                })
            })
            const result = await store.dispatch(getAllListsStart())
            const newState = store.getState();
            const {loading,payload,error} = newState.listReducer;
            expect({type:ListActionsTypes.GET_LISTS_START,loading,payload,error}).toEqual(result)
        })
        it("Store is updated correctly",async()=>{
            const expectedState = {
                loading:false,
                payload:[{   
                        id:"test id",
                        userId:"test userId",
                        title:"Example titl1",
                        body:"Some Text"
                    }],
                error:"",
            }
            const store = testStore();
    
            moxios.wait(()=>{
                const requests = moxios.requests.mostRecent();
                requests.respondWith({
                    status:200,
                    response:expectedState
                })
            })
            const result = await store.dispatch(getAllListsSuccess(expectedState.payload))
            const newState = store.getState();
            const {loading,payload,error} = newState.listReducer;
            expect({type:ListActionsTypes.GET_LISTS_SUCCESS,loading,payload,error}).toEqual(result)
        })
        it("Store is failed correctly",async()=>{
            const expectedState = {
                loading:false,
                payload:[],
                error:"test error",
            }
            const store = testStore();
    
            moxios.wait(()=>{
                const requests = moxios.requests.mostRecent();
                requests.respondWith({
                    status:200,
                    response:expectedState
                })
            })
            const result = await store.dispatch(getAllListsFailed(expectedState.error))
            const newState = store.getState();
            const {loading,payload,error} = newState.listReducer;
            expect({type:ListActionsTypes.GET_LISTS_FAILED,loading,payload,error}).toEqual(result)
        })
    })
    describe("get spec lists action",()=>{
        beforeEach(()=>{
            moxios.install()
        });
        afterEach(()=>{
            moxios.uninstall()
        })
        it("store is start correctly", async()=>{
            const expectedState = {
                loading:true,
                payload:[],
                error:"",
            }
            const store = testStore();
    
            moxios.wait(()=>{
                const requests = moxios.requests.mostRecent();
                requests.respondWith({
                    status:200,
                    response:expectedState
                })
            })
            const result = await store.dispatch(getSpecListsStart())
            const newState = store.getState();
            const {loading,payload,error} = newState.listReducer;
            expect({type:ListActionsTypes.GET_SPEC_LIST_START,loading,payload,error}).toEqual(result)
        })
        it("Store is updated correctly",async()=>{
            const expectedState = {
                loading:false,
                payload:[{   
                        id:"test id",
                        userId:"test userId",
                        title:"Example titl1",
                        body:"Some Text"
                    }],
                error:"",
            }
            const store = testStore();
    
            moxios.wait(()=>{
                const requests = moxios.requests.mostRecent();
                requests.respondWith({
                    status:200,
                    response:expectedState
                })
            })
            const result = await store.dispatch(getSpecListsSuccess(expectedState.payload))
            const newState = store.getState();
            const {loading,payload,error} = newState.listReducer;
            expect({type:ListActionsTypes.GET_SPEC_LIST_SUCCESS,loading,payload,error}).toEqual(result)
        })
        it("Store is failed correctly",async()=>{
            const expectedState = {
                loading:false,
                payload:[],
                error:"test error",
            }
            const store = testStore();
    
            moxios.wait(()=>{
                const requests = moxios.requests.mostRecent();
                requests.respondWith({
                    status:200,
                    response:expectedState
                })
            })
            const result = await store.dispatch(getSpecListsFailed(expectedState.error))
            const newState = store.getState();
            const {loading,payload,error} = newState.listReducer;
            expect({type:ListActionsTypes.GET_SPEC_LIST_FAILED,loading,payload,error}).toEqual(result)
        })
    })
})

