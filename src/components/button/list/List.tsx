import { PropsWithChildren } from "react"
import {ListLi} from "./ListStyle";
const List = ()=>{
    return (
        <ListLi>
            1
        </ListLi>
    )
}

const withList = (Component:()=>JSX.Element)=>{
    return (props:PropsWithChildren<any>)=>{
        return(
            <Component {...props}/>
        )
    }
}

export default withList(List);
