import React, { Component } from 'react';
import {
  asset,
  Animated,
  Pano,
  Text,
  View,
  Image,
  CylindricalPanel
} from 'react-vr';


// const AnimatedModel = Animated.createAnimatedComponent(CylindricalPanel);


export default class CPColumn extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        fade: 1
    };

    }


    render() {

        // let fsize = this.state.fontgaze ? 50 : 30; 
        return (
            <View style={{
                opacity: 1,
                flex: 1,
                height: '100%',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10
            }}>{this.props.children}
            </View> 
        );
    }
}

// AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);