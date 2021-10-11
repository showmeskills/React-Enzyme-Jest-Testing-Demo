import { PropsWithChildren,Fragment,Component } from "react";


import {BtnContainer} from "./buttonStyle";
import PropTypes from 'prop-types';


export interface ButtonProps{
    buttonText:string
    emitEvent(length:number):void
}

class SharedButton extends Component<PropsWithChildren<ButtonProps>>{
    static propTypes = {
        buttonText:PropTypes.string,
        emitEvent:PropTypes.func,
    }
    submitEvent=(length:number)=>{
        this.props.emitEvent(length);
    }
    render(){
        const {buttonText} = this.props;
        return(
            <Fragment>
                <BtnContainer data-test="buttonComponent"
                    onClick={()=>this.submitEvent(5)}
                >
                    {buttonText}
                </BtnContainer>
            </Fragment> 
        )
    }
}



export const withButton = (ComponentClass:any)=>{
    return class extends Component<PropsWithChildren<ButtonProps>>{
        state = {
            buttonText:this.props.buttonText
        }
        componentDidMount(){
            this.setState({
                ...this.state,
                buttonText:"Click Me A"
            })
        }
        render(){
            return(
                <ComponentClass buttonText={this.state.buttonText}></ComponentClass>
            )
        }
    }
}

export default SharedButton;