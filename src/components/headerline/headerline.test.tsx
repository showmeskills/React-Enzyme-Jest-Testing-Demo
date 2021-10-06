import React from 'react';
import renderer from "react-test-renderer";
import { shallow, ShallowWrapper } from 'enzyme';
import HeaderLine from './headerline';
import { findByTestAttr } from "../../Utils";
import { HeaderLineContainer } from "./headerlineStyle";
import {checkProps} from "../../Utils"
interface ItempArr {
    fName: string,
    lName: string,
    email: string,
    age: number,
    onlineStatus: boolean,
}
interface HeaderLineProps {
    header: string;
    desc: string;
    tempArr: Array<ItempArr>;
}

const setUp = (props: HeaderLineProps) => {
    const component = shallow(<HeaderLine {...props!} />)
    return component;
}

describe('HeaderLine Component', () => {
    it("snapshot",()=>{
        const props: HeaderLineProps = {
            header: "Test Header",
            desc: "Test Dest",
            tempArr: [{
                fName: "Test fName",
                lName: "Test lName",
                email: "Test email",
                age: 0,
                onlineStatus: true,
            }]
        }
        const component = (<HeaderLine {...props}/>);
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    })
    describe('have props', () => {
        let component: ShallowWrapper;
        beforeEach(() => {
            const props: HeaderLineProps = {
                header: "Test Header",
                desc: "Test Dest",
                tempArr: [{
                    fName: "Test fName",
                    lName: "Test lName",
                    email: "Test email",
                    age: 0,
                    onlineStatus: true,
                }]
            }
            component = setUp(props);
        })

        it("should render without errors", () => {
            const container = component.find(HeaderLineContainer);
            expect(container.length).toBe(1);
            const headLineComponent = findByTestAttr(component, "HeadlineComponent");
            expect(headLineComponent.length).toBe(1);
        })
        it("should render a H1", () => {
            const h1 = findByTestAttr(component, "header");
            expect(h1.length).toBe(1);
        })
        it("should render a desc", () => {
            const desc = findByTestAttr(component, "desc");
            expect(desc.length).toBe(1);
        })

    })
    describe("checking prop-types",()=>{
        it("should not throw a warning",()=>{
            const expectedProps = {
                header:"Test header",
                desc:"Test desc",
                tempArr: [{
                    fName: "Test fName",
                    lName: "Test lName",
                    email: "Test@email.com",
                    age: 23,
                    onlineStatus: false,
                }]
            }
            const propsErr = checkProps(HeaderLine,expectedProps)
            expect(propsErr).toBeUndefined();
        })
    })
    // describe("have not props", () => {
    //     let component: ShallowWrapper;
    //     beforeEach(() => {
    //         component = setUp();
    //     })
    //     it("should render headerline component", () => {
    //         const container = component.find(HeaderLineContainer);
    //         expect(container.length).toBe(1);
    //         const headLineComponent = findByTestAttr(component, "HeadlineComponent");
    //         expect(headLineComponent.length).toBe(1);
    //     })
    //     it("should not render H1", () => {
    //         const h1 = findByTestAttr(component, "header");
    //         expect(h1.length).toBe(0);
    //     })
    //     it("should not render a desc", () => {
    //         const desc = findByTestAttr(component, "desc");
    //         expect(desc.length).toBe(0);
    //     })
    // })
})