import React from "react";
import renderer from "react-test-renderer";
import { shallow, ShallowWrapper, } from "enzyme";
import ListItem, { ListProps } from "./List";
import { Ul, Li } from "./ListStyle";
import { findByTestAttr, checkProps } from "../../Utils/index";


const setUp = (props: ListProps) => {
    const component = shallow(<ListItem {...props} />) // can test props 
    return component;
}

describe("List component should", () => {
    it("have a snapshot", () => {
        const props: ListProps = {
            list: [
                {
                    userId:"test 0",
                    id: "test 0",
                    title: "Example title",
                    body: "Some text"
                }
            ]
        };
        const component = (<ListItem {...props} />);
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    })
    describe("Checking PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                list: [
                    {
                        userId:"test 0",
                        id: "test 0",
                        title: "Example title",
                        body: "Some text"
                    }
                ]
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined();
        })
    })
    describe("List component shoud", () => {
        let wrapper: ShallowWrapper
        beforeEach(() => {
            const props = {
                list: [
                    {
                        userId:"test 0",
                        id: "test 0",
                        title: "Example title",
                        body: "Some text"
                    }
                ]
            }
            wrapper = setUp(props)
        })
        it("render UL", () => {
            const UlContainer = wrapper.find(Ul);
            expect(UlContainer.length).toBe(1);
            const ulComponent = findByTestAttr(wrapper, "ulComponent");
            expect(ulComponent.length).toBe(1);
        })
        it("render li", () => {
            const LiContainer = wrapper.find(Li);
            expect(LiContainer.length).toBe(1);
            const liComponent = findByTestAttr(wrapper, "liComponent");
            expect(liComponent.length).toBe(1);
        })
        it("render title", () => {
            const componentTitle = findByTestAttr(wrapper, "componentTitle");
            expect(componentTitle.length).toBe(1);
        })
        it("render desc", () => {
            const componentDesc = findByTestAttr(wrapper, "componentDesc");
            expect(componentDesc.length).toBe(1);
        })
    })
})