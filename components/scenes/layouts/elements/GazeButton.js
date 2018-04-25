import React from "react";
import {
    VrButton
} from 'react-vr';

export default class GazeButton extends React.Component{
    constructor(props){
        super(props);

        // eventually will make this optional as a prop?
        this.timeout = 2000;
        this.triggerSelection = this.triggerSelection.bind(this);
    }

    // what happens after timeout (or click)
    triggerSelection(){
        const { onTrigger } = this.props;
        onTrigger();
    }

    // like mouseenter
    onEnter(e){
        this.interval = setTimeout(this.triggerSelection, this.timeout); 

        const { onHover } = this.props;
        onHover();
    }

    // like mouseexist
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