import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import { AppContainer } from "./AppStyle";
import { findByTestAttr } from "./Utils";
import { Header } from "./components/header";
import { HeaderLine } from "./components/headerline";
import { HeaderLineContainer } from "./components/headerline/headerlineStyle";
import { HeaderContainer } from "./components/header/headerStyle";
import { Provider } from 'react-redux';
import { store } from './redux/rootStore';

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

const setUpHeaderLine = (props: HeaderLineProps) => {
  const component = shallow(<HeaderLine {...props} />)
  return component;
}

const setUp = (props = { }) => {
  const component = shallow(
    <Provider store={store}>
      <App {...props} />
    </Provider>
  )
  return component;
}
describe('renders app', () => {
  it("should show a app", () => {
    const component = (
      <Provider store={store}>
        <App />
      </Provider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  })
  describe('app container', () => {
    let component: ShallowWrapper;
    beforeEach(() => {
      component = setUp();
    })
    it("should app to render without errors", () => {
      const app = component.find(App);
      expect(app.length).toBe(1);
      // console.log(pp.length)
      // const app = component.find(AppContainer);
      // expect(app.length).toBe(1);
      // const appContainer = findByTestAttr(component, "appContainer")
      // expect(appContainer.length).toBe(1);
    })
  })


  describe("header component", () => {
    const setUp = (props = { }) => {
      const component = shallow(<Header {...props} />) // can test props 
      return component;
    }
    let component: ShallowWrapper;
    //beforeEach(): before every single test 
    //all declarations should pass function  const component = shallow(<Header {...props}/>) first
    beforeEach(() => {
      component = setUp();
    })

    it("should render without errors", () => {
      const container = component.find(HeaderContainer);
      expect(container.length).toBe(1);
      const wrapper = findByTestAttr(component, "headerComponent");
      expect(wrapper.length).toBe(1);
    })
    it("should render a logo", () => {
      //data-test 
      const logo = findByTestAttr(component, "logoImg");
      expect(logo.length).toBe(1);
    })
  })




  describe("headerline component", () => {
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
      component = setUpHeaderLine(props);
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
});
