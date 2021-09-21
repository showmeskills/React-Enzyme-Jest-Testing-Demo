import {createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware,{SagaMiddleware} from "@redux-saga/core";
import {rootReducer} from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import {AppActions} from "./interface/actions-type";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
export type AppState = ReturnType<typeof rootReducer>

export const store = createStore<AppState,AppActions,{},{}>(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware as SagaMiddleware<AppState>,logger))
)

sagaMiddleware.run(rootSaga)