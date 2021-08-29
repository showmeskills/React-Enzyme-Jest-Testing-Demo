import React from 'react';
import {shallow,ShallowWrapper} from "enzyme";
import Header from "./header";
import {HeaderContainer} from "./headerStyle";
import {findByTestAttr} from "../../Utils/index"

const setUp = (props={})=>{
    const component = shallow(<Header {...props}/>) // can test props 
    return component;
}

describe('Header Component', () => {
    let component:ShallowWrapper;
    //beforeEach(): before every single test 
    //all declarations should pass function  const component = shallow(<Header {...props}/>) first
    beforeEach(() => { 
        component = setUp();
        
    })

    it("should render without errors",()=>{  
        const container = component.find(HeaderContainer);
        expect(container.length).toBe(1);
        const wrapper = findByTestAttr(component,"headerComponent");
        expect(wrapper.length).toBe(1);
    })
    it("should render a logo",()=>{
        //data-test 
        const logo = findByTestAttr(component,"logoImg");
        expect(logo.length).toBe(1);
    })

})