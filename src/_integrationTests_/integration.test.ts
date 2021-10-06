import moxios from "moxios";
import { testStore } from "../Utils";
import { ListActionsTypes } from "../redux/interface/saga-type";
import { getAllListsSuccess } from "../redux/actions/list-actions";

describe("fetch list action",()=>{
    beforeEach(()=>{
        moxios.install()
    });
    afterEach(()=>{
        moxios.uninstall()
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
})