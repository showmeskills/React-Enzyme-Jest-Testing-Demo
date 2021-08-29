import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import {AppContainer} from "./AppStyle";

describe('renders app', () => {
    it("should show a app",()=>{
      // const component = (<App/>);
      // const tree = renderer.create(component).toJSON();
      // expect(tree).toMatchSnapshot();
    })
    it("app container",()=>{
      // const wrapper = shallow(<App/>);
      // const appContainer = wrapper.find(AppContainer);
      // expect(appContainer.length).toBe(1);
    })
});
