import {all} from "redux-saga/effects";
import {watchListSaga} from "./list-saga/listSaga"
export default function * rootSaga(){
    yield all([watchListSaga()]);
}