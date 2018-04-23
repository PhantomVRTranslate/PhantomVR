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


export default class TitleVr extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        // fade: new Animated.Value(0)
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
    //         duration: 500,
    //         delay: 500
    //     }
    //     ).start();
    // }

    render() {
        return (
                <View> 
                    <Text
                    style={{
                        flex: 1,
                        color: '#FFF',
                        fontSize: 50,
                        borderWidth: 10,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        height: '100%'
                        }} 
                    >{this.props.children || this.props.text}
                    </Text>    
                </View>  
                
        );
    }
}

// AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
module.exports = TitleVr;