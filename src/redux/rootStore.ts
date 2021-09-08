import {createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware,{SagaMiddleware} from "redux-saga";
import {rootReducers} from "./reducers/rootReducers";
import { createLogger } from "redux-logger";
import {AppActions} from "./interface/actions-types";
import {rootSagas} from "./sagas/sagas";
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
export type AppState = ReturnType<typeof rootReducers>;

export const store = createStore<AppState,AppActions,{},{}>(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware as SagaMiddleware<AppState>,logger )));
sagaMiddleware.run(rootSagas)
