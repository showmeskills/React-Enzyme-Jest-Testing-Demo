/* eslint-disable @typescript-eslint/no-useless-constructor */

import React,{Component} from "react";
import {HeaderLineContainer} from "./headerlineStyle";

interface HeaderLineProps{
    header: string;
    desc: string;
}


class HeaderLine extends Component<React.PropsWithChildren<HeaderLineProps>> {

    constructor(props:HeaderLineProps) {
        super(props);
    }
    render(){
        const {header,desc} = this.props;
 
        return(
            <HeaderLineContainer data-test="HeadlineComponent">
                {
                    header&&<h1 data-test="header">{header}</h1>
                }
                {
                    desc&&<p data-test="desc">{desc}</p>
                }
            </HeaderLineContainer>
        )
    }
}

export default HeaderLine;