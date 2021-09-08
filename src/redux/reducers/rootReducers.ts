import { combineReducers } from "redux";
import {successReducer} from "./successReducer";
import {failedReducer} from "./failedReducer";
export const rootReducers = combineReducers({
    successReducer,
    failedReducer
});