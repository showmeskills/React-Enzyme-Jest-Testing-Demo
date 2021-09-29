import rootSaga from "./rootSaga"
import {watchListSaga} from "./list-saga/listSaga"
describe("root saga should",()=>{
    it("have watchList saga", ()=>{
        const root = rootSaga();
        expect(root.next().value.payload.length).toBe([watchListSaga].length)
    })
})