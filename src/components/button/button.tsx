import { PropsWithChildren,Fragment } from "react";
import {useSelector,useDispatch} from "react-redux";
import {AppState} from "../../redux/rootStore";


import {BtnContainer,ListUl} from "./buttonStyle";
import List from "./list/List";
const Button = ()=>{
   
    return(
        <Fragment>
            <BtnContainer >Click Me</BtnContainer>
            <ListUl>
                <List/>
            </ListUl>
        </Fragment>
    )
}

export const withButton = (Component:()=>JSX.Element)=>{
    return (props:PropsWithChildren<any>)=>{
        
        return (
            <Component {...props}/>
        )
    }
}

export default withButton(Button);