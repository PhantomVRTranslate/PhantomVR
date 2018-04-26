import React from "react";
import { View, Animated, asset, Image, Text, VrButton } from "react-vr";
import { Easing } from "react-native";

import GazeButton from '../button/gaze_button';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      slideForward: new Animated.Value(-12), 
      fadeIn: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideForward,
          {
           toValue: -5,
           duration: 4000,
           easing: Easing.bezier(.5,.34,.3,.88)
          }
        ),

        Animated.timing(
          this.state.fadeIn,
          {
           toValue: .8,
           duration: 4000,
           easing: Easing.linear
          }
        )
      ])
    ]).start();
  }

  handleTrigger() {
      console.log('hi');

    this.props.activateScene();
  }

  render() {

    return (
      <Animated.View
        style={{
          opacity: this.state.fadeIn,
          padding: .02,
          margin: .02,
          width: 10,
          height: 0.3,
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, -.75, this.state.slideForward] }],
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          position: 'absolute'
        }} >
        <Text style={{
            fontSize: 1,
            transform: [{ translate: [0, 1.5, 0] }],
        }}>Sample App</Text>
        <GazeButton 
            onTrigger={this.handleTrigger.bind(this)}
            >
            <Animated.View style={{
                backgroundColor: '#111',
                borderRadius: .06,
                padding: .03,
                paddingLeft: .08,
                paddingRight: .08,
            }} >
            <Text style={{
            fontSize: .4,
            textAlign: 'center',
            textAlignVertical: 'center'
        }}>Start</Text>
        </Animated.View>
        </GazeButton>
      </Animated.View>
    );
  }
}
