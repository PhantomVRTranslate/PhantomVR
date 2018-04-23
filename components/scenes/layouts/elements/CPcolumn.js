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


export default class Colum2 extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        fade: 1
        // fontgaze: false
    };
    // this.fade = this.fade.bind(this); 
    }

    // componentDidMount() {
    // this.fade(); 
    // }

    // fade() {
    //     this.state.fade.setValue(0);
    //     Animated.timing(
    //     this.state.fade,
    //     {
    //         toValue: 1,
    //         duration: 2000,
    //         delay: 500
    //     }
    //     ).start();
    // }

    // changeFont() {
    //     console.log('gaze triggered'); 
    //     this.setState({fontgaze: !this.state.fontgaze});
    // }



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
module.exports = Colum2;