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
        const progressWidth = new Animated.Value(0);

        this.state = {
            progressWidth
        };

        this.timeout = 1000;
        this.triggerSelection = this.triggerSelection.bind(this);
    }

    triggerSelection(){
        Animated.timing(
            this.state.progressWidth, {
              toValue: 0,
              duration: 200,
              easing: Easing.linear
            }).start();

        const { onTrigger } = this.props;
        onTrigger();
    }

    onEnter(e){
        Animated.timing(
            this.state.progressWidth, {
              toValue: .2,
              duration: 1000,
              easing: Easing.linear
            }).start();

        this.interval = setTimeout(this.triggerSelection, this.timeout); 

        const { onHover } = this.props;
        onHover();
    }

    onExit(){
        Animated.timing(
            this.state.progressWidth, {
              toValue: 0,
              duration: 200,
              easing: Easing.linear
            }).start();

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
                <Animated.View 
                    style={{
                        backgroundColor:'rgb(200, 200, 200)',
                        bottom: 0,
                        width: this.state.progressWidth,
                        height: .01,
                    }}
                    />
            </VrButton>
        )
    }
}