import React, { Component } from "react";
import { asset, Animated, Text, Image } from "react-vr";
import { Easing } from 'react-native';

import GazeButton from "../button/gaze_button";

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    const isSelected = this.props.currGallery === this.props.link;

    this.black = 0;
    this.gray = 1;
    this.white = 2;

    const backgroundColor = isSelected ? new Animated.Value(1) : new Animated.Value(0);
    // const opacity = isSelected ? new Animated.Value(1) : new Animated.Value(.1);
    const fontSize = isSelected
      ? new Animated.Value(0.105)
      : new Animated.Value(0.1);

    this.state = {
      backgroundColor,
      // opacity,
      fontSize,
      isSelected
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currGallery !== nextProps.link && this.state.isSelected) {
      this.setState({
        // backgroundColor: "#222",
        // opacity: 0.8,
        isSelected: false
      });

      Animated.timing(this.state.fontSize, {
        toValue: .1,
        duration: 200,
        easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
      }).start();
    }
  }

  handleHover(e) {
    if (!this.state.isSelected) {
      // this.setState({
      //   opacity: 0.85
      // });
      console.log(this.state.backgroundColor);

      Animated.sequence([
        Animated.parallel([
          Animated.timing(
            this.state.backgroundColor, {
             toValue: this.gray,
             duration: 1000,
             easing: Easing.linear
            })
          // Animated.timing(
          //   this.state.opacity, {
          //     toValue: 1,
          //     duration: 6000,
          //     easing: Easing.linear
          //   })
          ])
      ]).start();

      // Animated.timing(this.state.fontSize, {
      //   toValue: .105,
      //   duration: 200,
      //   easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
      // }).start();

    }
  }

  handleLeave(e) {
    if (!this.state.isSelected) {
      this.setState({
        // backgroundColor: "#222",
        // opacity: 0.8,
      });

      Animated.timing(this.state.fontSize, {
        toValue: .1,
        duration: 200,
        easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
      }).start();
    }
  }

  handleTrigger() {
    this.setState({
      // backgroundColor: "#444",
      // opacity: 0.9,
      isSelected: true
    });

    Animated.timing(this.state.fontSize, {
      toValue: .11,
      duration: 200,
      easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
    }).start();

    // When the gaze button is triggered, it changes the 'link'
    this.props.changeGallery(this.props.link);
  }

  render() {
    const { backgroundColor, opacity, fontSize } = this.state;

    const AnimatedGaze = Animated.createAnimatedComponent(GazeButton);

    return (
      <AnimatedGaze
        style={{
          flex: 1,
          // fromBgColor: 'rgba(1, 1, 1, 1)',
          // toBgColor: 'rgba(40, 40, 40, 40)',
          backgroundColor: backgroundColor.interpolate({
            inputRange: [this.black, this.gray, this.white],
            outputRange: ['rgb(0, 0, 0)', 'rgb(100, 100, 100)', 'rgb(255, 255, 255)']
          }),
          // opacity,
          height: "100%",
          margin: 0.01,
          justifyContent: "center",
          alignItems: "center"
        }}
        onHover={this.handleHover.bind(this)}
        onTrigger={this.handleTrigger.bind(this)}
        onLeave={this.handleLeave.bind(this)}
      >
        <Animated.Text
          style={{
            fontSize,
            color: "#FFF"
          }}
        >
          {this.props.children}
        </Animated.Text>
      </AnimatedGaze>
    );
  }
}
