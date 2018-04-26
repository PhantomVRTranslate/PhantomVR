import React from "react";
import {
    VrButton,
    Animated,
    View
} from 'react-vr';

import { Easing } from 'react-native';

export default class GazeButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            progressWidth: new Animated.Value(0),
        };

        // eventually will make this optional as a prop?
        this.timeout = this.props.timeout || 2000;
        this.triggerSelection = this.triggerSelection.bind(this);
    }

    // what happens after timeout (or click)
    triggerSelection(){
        const { onTrigger } = this.props;
        onTrigger();

        Animated.timing(
            this.state.progressWidth, {
              toValue: 0,
              duration: (this.timeout / 5),
              easing: Easing.linear
            }).start();
    }

    // like mouseenter
    onEnter(e){
        this.interval = setTimeout(this.triggerSelection, this.timeout); 

        const { onHover } = this.props;
        onHover();

        Animated.timing(
        this.state.progressWidth, {
            toValue: .2,
            duration: this.timeout,
            easing: Easing.linear
        }).start();
    }

    // like mouseexist
    onExit(){
        clearTimeout(this.interval);
        
        const { onLeave } = this.props;
        onLeave();

        Animated.timing(
            this.state.progressWidth, {
              toValue: 0,
              duration: (this.timeout / 5),
              easing: Easing.linear
            });
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

                {/* progress bar */}
                <Animated.View 
                    style={{
                        backgroundColor:'rgb(200, 200, 200)',
                        bottom: 0,
                        width: this.state.progressWidth,
                        height: .01,
                    }}
                    />
            </VrButton>
        );
    }
}