import React from "react";
import { View, Animated, asset, Image, Text, VrButton } from "react-vr";
import { Easing } from "react-native";

import GazeButton from "../button/gaze_button";

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideForward: new Animated.Value(-10),
      slideUp: new Animated.Value(-0.35),
      fadeInTitle: new Animated.Value(0),
      fadeInStart: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.slideForward, {
          toValue: -3,
          duration: 3000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
        }),
        Animated.timing(this.state.fadeInTitle, {
          toValue: 0.8,
          duration: 3000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.fadeInStart, {
          toValue: 1,
          duration: 3000,
          delay: 3000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88),
        })
      ])
    ]).start();
  }

  handleTrigger() {
    setTimeout(this.props.activateScene, 5000);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.fadeInStart, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.slideForward, {
          toValue: -3.5,
          duration: 3000,
        //   delay: 2000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88),
        }),
        Animated.timing(this.state.slideUp, {
            toValue: 1,
            duration: 3000,
            // delay: 3000,
            easing: Easing.bezier(0.5, 0.34, 0.3, 0.88),
          })
      ])
    ]).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          opacity: this.state.fadeInTitle,
          padding: 0.02,
          margin: 0.02,
          width: 10,
          height: 0.3,
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, this.state.slideUp, this.state.slideForward] }],
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          position: "absolute"
        }}
      >
        <Text
          style={{
            fontSize: 0.6,
            transform: [{ translate: [0, 0.7, 0] }]
          }}
        >
          Sample App
        </Text>
        <GazeButton 
          onTrigger={this.handleTrigger.bind(this)}>
          <Animated.View
            style={{
              opacity: this.state.fadeInStart,
              // backgroundColor: "#111",
              // borderRadius: 0.06,
              // padding: 0.03,
              // paddingLeft: 0.08,
              // paddingRight: 0.08
            }}
          >
            <Text
              style={{
                fontSize: 0.3,
                textAlign: "center",
                textAlignVertical: "center"
              }}
            >
              Start
            </Text>
          </Animated.View>
        </GazeButton>
      </Animated.View>
    );
  }
}
