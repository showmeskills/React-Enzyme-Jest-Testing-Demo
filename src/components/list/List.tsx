import {Ul,Li} from "./ListStyle";
import { PropsWithChildren } from 'react';

interface List{
    userId:string,
    id:string,
    title:string,
    body:string,
}

export interface ListProps{
    list:List[]
}

const ListItem = (props:PropsWithChildren<ListProps>)=>{
    const {list} = props;
    return (
      <>
        {
            list.length > 0
            &&
            <Ul data-test="ulComponent">
               {
                   list.map((item)=>{
                       return(
                        <Li data-test="liComponent"
                            key={item.id}
                        >
                            <h2 data-test="componentTitle">{item.title}</h2>
                            <div data-test="componentDesc">{item.body}</div>
                        </Li>
                       )
                   })
               }
            </Ul>
        }
      </>
    )
}



export default ListItem;
