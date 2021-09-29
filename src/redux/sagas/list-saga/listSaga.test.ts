import { get_ALl_Lists, get_Spec_Lists, watchListSaga } from "./listSaga";
import { takeEvery, } from "@redux-saga/core/effects";
import { List, ListActionsTypes } from "../../interface/saga-type";
import {getAllListsTest}from "../../../services/axios";
import { AppActions } from "../../interface/actions-type";
import { runSaga } from "@redux-saga/core";
import { getAllListsFailed, getAllListsStart, getSpecListsFailed, getSpecListsStart } from "../../actions/list-actions";



describe("list-saga should", () => {
    function forEach(items: Array<List>, callback: Function) {
        for (let index: number = 0; index < items.length; index++) {
        callback(items[index]);
        }
    }
    it("run get_all_lists and get_spec_list saga", async () => {
        const generator = watchListSaga();
        expect(generator.next().value).toEqual(takeEvery(ListActionsTypes.GET_LISTS, get_ALl_Lists));
        expect(generator.next().value).toEqual(takeEvery(ListActionsTypes.GET_SPEC_LIST, get_Spec_Lists));
        expect(generator.next().done).toBeTruthy();

    })
    it("get_ALl_Lists api call", async () => {
        const dispatchedActions: AppActions[] = [];
        const mockLists:List[] = [
                {
                  "userId": "1",
                  "id": "1",
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
              ]
        const mockFn = jest.fn(()=>Promise.resolve(getAllListsTest));
        forEach(mockLists,mockFn)
        const error = "get_All_lists error"
        const fakeStore = {
            getState: () => ({state:"Test"}),
            dispatch: (action:any) => dispatchedActions.push(action),
        }
        await runSaga(fakeStore, get_ALl_Lists);  
        
        expect(mockFn.mock.calls.length).toBe(1);
        expect(dispatchedActions[0]).toEqual(getAllListsStart())
        expect(dispatchedActions[1]).toEqual(getAllListsFailed(error))
    })
    it("get_spec_lists api call", async () => {
        const dispatchedActions: AppActions[] = [];
        const mockLists:List[] = [
                {
                  "userId": "1",
                  "id": "1",
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
              ]
        const mockFn = jest.fn(()=>Promise.resolve(getAllListsTest));
        forEach(mockLists,mockFn)
        const error = "get_All_lists error"
        const fakeStore = {
            getState: () => ({state:"Test"}),
            dispatch: (action:any) => dispatchedActions.push(action),
        }
        await runSaga(fakeStore, get_Spec_Lists,1);  
        
        expect(mockFn.mock.calls.length).toBe(1);
        expect(dispatchedActions[0]).toEqual(getSpecListsStart())
        expect(dispatchedActions[1]).toEqual(getSpecListsFailed(error))
    })
})


