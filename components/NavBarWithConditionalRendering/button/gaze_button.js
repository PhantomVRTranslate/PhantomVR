import React from "react";
import {
    VrButton
} from 'react-vr';

export default class GazeButton extends React.Component{
    constructor(props){
        super(props);
        this.timeout = 1000
        this.triggerSelection = this.triggerSelection.bind(this);
    }

    triggerSelection(){
        const { onTrigger } = this.props;
        onTrigger();
    }

    onEnter(e){
        this.interval = setTimeout(this.triggerSelection, this.timeout); 

        const { onHover } = this.props;
        onHover();
    }

    onExit(){
        clearTimeout(this.interval);
        
        const { onLeave } = this.props;
        onLeave();
    }

    render(){
        const { style } = this.props;
        return ( 
            <VrButton 
                onEnter={this.onEnter.bind(this)} 
                onExit={this.onExit.bind(this)}
                style={style} 
                onClick={this.triggerSelection}
            >
                {this.props.children}
            </VrButton>
        )
    }
}