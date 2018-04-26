import React, { Component } from "react";
import { asset, Animated, Text, Image } from "react-vr";
import { Easing } from 'react-native';

import GazeButton from "../button/gaze_button";

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    const isSelected = this.props.currGallery === this.props.link;
    console.log( isSelected);

    this.black = 0;
    this.gray = 1;
    this.white = 2;

    const backgroundColor = isSelected ? '#333' : '#222';
    // const opacity = isSelected ? new Animated.Value(1) : new Animated.Value(.1);
    const fontSize = isSelected
      ? new Animated.Value(0.12)
      : new Animated.Value(0.1);

    const progressWidth = new Animated.Value(0);
    const progressHeight = new Animated.Value(0);

    this.state = {
      backgroundColor,
      fontSize,
      isSelected,
      progressWidth,
      progressHeight
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currGallery !== nextProps.link && this.state.isSelected) {
      this.setState({
        backgroundColor: "#222",
        isSelected: false
      });

      console.log(this.state.fontSize);

      Animated.timing(this.state.fontSize, {
        toValue: .1,
        duration: 200,
        easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
      }).start();
    }
  }

  handleHover(e) {
    if (!this.state.isSelected) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(
            this.state.progressWidth, {
              toValue: .2,
              duration: 1000,
              easing: Easing.linear
            }),
          Animated.timing(
            this.state.progressHeight, {
              toValue: .1,
              duration: 1000,
              easing: Easing.linear
            })
          ])
      ]).start();
    }
  }

  handleLeave(e) {
    if (!this.state.isSelected) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(
            this.state.progressWidth, {
              toValue: 0,
              duration: 200,
              easing: Easing.linear
            })
          ])
      ]).start();
    }
  }

  handleTrigger() {
    this.setState({
      backgroundColor: "#333",
      isSelected: true
    });

    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.progressWidth, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear
          }),
        Animated.timing(this.state.fontSize, {
          toValue: .12,
          duration: 200,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
        })
        ])
    ]).start();

    // // When the gaze button is triggered, it changes the 'link'
    this.props.changeGallery(this.props.link);
  }

  render() {
    const { backgroundColor, opacity, fontSize } = this.state;

    const AnimatedGaze = Animated.createAnimatedComponent(GazeButton);

    return (
      <GazeButton
        style={{
          width: .5,
          // backgroundColor: backgroundColor.interpolate({
          //   inputRange: [this.black, this.gray, this.white],
          //   outputRange: ['rgb(0, 0, 0)', 'rgb(40, 40, 40)', 'rgb(255, 255, 255)']
          // }),
          backgroundColor,
          overflow: 'hidden',
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
        <Animated.View 
              style={{
                backgroundColor:'rgb(200, 200, 200)',
                bottom: 0,
                width: this.state.progressWidth,
                height: .01,
              }}
               />
      </GazeButton>
    );
  }
}
