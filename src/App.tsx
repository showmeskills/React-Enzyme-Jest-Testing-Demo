import {connect,useDispatch,useSelector} from "react-redux";

import {Header} from "./components/header";
import {HeaderLine} from "./components/headerline";
import {Button} from "./components/button";
import {AppContainer} from "./AppStyle";
import ListItem from "./components/list/List";
import { ListActionsTypes } from "./redux/interface/saga-type";
import { AppState } from "./redux/rootStore";
import { PropsWithChildren, PureComponent } from "react";
import { Dispatch } from "redux";


const tempArr = [
  {
    fName:"TT",
    lName:"YY",
    email:"1xxxxx@gmail.com",
    age:24,
    onlineStatus:true,
  }
]


class App extends PureComponent<PropsWithChildren<any>>{
    state = {
      header:"Posts",
      desc:"Click the button to render posts!",
      buttonText:"Click Me",
    }
    emitEvent = (length:number)=>this.props.handleSpecLists(length);
    render(){
      const {header,desc,buttonText} = this.state;
      // const {payload} = this.props;
      return(
        <AppContainer data-test="appContainer">
          <Header />
          <section className="main">
            <HeaderLine  header={header} desc={desc} tempArr={tempArr}/>
            <Button buttonText={buttonText} emitEvent={this.emitEvent}/>
            <ListItem list={[]}/>
          </section>
        </AppContainer>
      )
    }
}



// function App() {
//   const header = "Posts";
//   const desc = "Click the button to render posts!";
//   const buttonText = "Click Me";
//   const dispatch = useDispatch();
//   const handleRequestSpecLists=(length:number)=>dispatch({type:ListActionsTypes.GET_SPEC_LIST,length})
//   const list = useSelector((state:AppState)=>state.listReducer.payload);
//   const emitEvent = (length:number)=>handleRequestSpecLists(length);
 
//   return (
//     <AppContainer data-test="appContainer">
//       <Header />
//       <section className="main">
//         <HeaderLine  header={header} desc={desc} tempArr={tempArr}/>
//         <Button buttonText={buttonText} emitEvent={emitEvent}/>
//         <ListItem list={list}/>
//       </section>
//     </AppContainer>
//   );
// }

const mapStateToProps = (state:AppState)=>({
  loading:state.listReducer.loading,
  payload:state.listReducer.payload,
  error:state.listReducer.error
})

const mapDispatchToProps = (dispatch:Dispatch)=>({
  handleAllLists:()=>dispatch({type:ListActionsTypes.GET_LISTS}),
  handleSpecLists:(length:number)=>dispatch({type:ListActionsTypes.GET_SPEC_LIST,length})
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
