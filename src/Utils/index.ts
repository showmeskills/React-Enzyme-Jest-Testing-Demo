/* eslint-disable react/forbid-foreign-prop-types */
import {ShallowWrapper} from "enzyme";
import checkPropTypes from "check-prop-types";
import { applyMiddleware,createStore } from "redux";
import { rootReducer } from "../redux/reducers/rootReducer";


export const testStore = (initialState={}) =>{
    const createStoreWithMiddleware = applyMiddleware()(createStore)
    return createStoreWithMiddleware(rootReducer,initialState);
}


export const findByTestAttr = (component: ShallowWrapper,attr:string)=>{
    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
}

export const checkProps = (component:any,expectedProps:{})=>{
    const propsErr = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsErr;
}


