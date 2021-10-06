import React from "react";
import renderer from "react-test-renderer";
import {shallow,ShallowWrapper,} from "enzyme";
import SharedButton,{ButtonProps} from "./button";
import {BtnContainer} from "./buttonStyle";
import {findByTestAttr,checkProps} from "../../Utils/index";

const setUp = (props:ButtonProps)=>{
    const component = shallow(<SharedButton {...props}/>) // can test props 
    return component;
}

describe("Button Component",()=>{
    it("should show a button", () => {
        const props:ButtonProps = {
            buttonText:"Example Button Text",
            emitEvent:()=>{}
        };
        const component = (<SharedButton {...props}/>);
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
      })
    describe("Checking PropTypes",()=>{
        it("Should Not Throw a warning",()=>{
            const expectedProps:ButtonProps = {
                buttonText:"Example Button Text",
                emitEvent:()=>{}
            };
            const propsError = checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        })
    })
    describe("Renders",()=>{
        let wrapper:ShallowWrapper
        beforeEach(()=>{
            const props:ButtonProps = {
                buttonText:"Example Button Text",
                emitEvent:()=>{}
            }
            wrapper = setUp(props)
        })

        it("Should render a button",()=>{
            const btnContainer = wrapper.find(BtnContainer);
            expect(btnContainer.length).toBe(1);
            const button = findByTestAttr(wrapper,"buttonComponent");
            expect(button.length).toBe(1);
        })
        
    })

})