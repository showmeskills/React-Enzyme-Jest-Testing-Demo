import React from 'react';
import { shallow,ShallowWrapper } from 'enzyme';
import HeaderLine from './headerline';
import {findByTestAttr} from "../../Utils";
import {HeaderLineContainer} from "./headerlineStyle";
interface HeaderLineProps{
    header: string;
    desc: string;
}

const setUp = (props?:HeaderLineProps)=>{
        const component = shallow(<HeaderLine {...props!}/>)
        return component;
}

describe('HeaderLine Component', () => {
   
    describe('have props', () => {
        let component:ShallowWrapper;
        beforeEach(() => { 
           const props:HeaderLineProps = {
                header:"Test Header",
                desc:"Test Dest",
           }
           component = setUp(props);
        })

        it("should render without errors",()=>{  
            const container = component.find(HeaderLineContainer);
            expect(container.length).toBe(1);
            const headLineComponent = findByTestAttr(component,"HeadlineComponent");
            expect(headLineComponent.length).toBe(1);
        })
        it("should render a H1",()=>{
            const h1 = findByTestAttr(component,"header");
            expect(h1.length).toBe(1);
        })
        it("should render a desc",()=>{
            const desc = findByTestAttr(component,"desc");
            expect(desc.length).toBe(1);
        })

    })
    describe("have not props", () => {
        let component:ShallowWrapper;
        beforeEach(() =>{
            component = setUp();
        })
        it("should render headerline component",()=>{
            const container = component.find(HeaderLineContainer);
            expect(container.length).toBe(1);
            const headLineComponent = findByTestAttr(component,"HeadlineComponent");
            expect(headLineComponent.length).toBe(1);
        })
        it("should not render H1",()=>{
            const h1 = findByTestAttr(component,"header");
            expect(h1.length).toBe(0);
        })
        it("should not render a desc",()=>{
            const desc = findByTestAttr(component,"desc");
            expect(desc.length).toBe(0);
        })
    })
})