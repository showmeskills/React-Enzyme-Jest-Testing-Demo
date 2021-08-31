/* eslint-disable react/forbid-foreign-prop-types */
import {ShallowWrapper} from "enzyme";
import checkPropTypes from "check-prop-types";

export const findByTestAttr = (component: ShallowWrapper,attr:string)=>{
    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
}

export const checkProps = (component:any,expectedProps:{})=>{
    const propsErr = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsErr;
}
