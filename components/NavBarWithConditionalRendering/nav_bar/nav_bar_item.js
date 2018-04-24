import React, { Component } from "react";
import { asset, Animated, Text, Image } from "react-vr";
import { Easing } from 'react-native';

import GazeButton from "../button/gaze_button";

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    const isSelected = this.props.currGallery === this.props.link;

    const backgroundColor = isSelected ? "#444" : "#222";
    const opacity = isSelected ? 0.9 : 0.8;
    const fontSize = isSelected
      ? new Animated.Value(0.105)
      : new Animated.Value(0.1);

    this.state = {
      backgroundColor,
      opacity,
      fontSize,
      isSelected
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currGallery !== nextProps.link && this.state.isSelected) {
      this.setState({
        backgroundColor: "#222",
        opacity: 0.8,
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
      this.setState({
        backgroundColor: "#333",
        opacity: 0.85
      });

      Animated.timing(this.state.fontSize, {
        toValue: .105,
        duration: 200,
        easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
      }).start();
    }
  }

  handleLeave(e) {
    if (!this.state.isSelected) {
      this.setState({
        backgroundColor: "#222",
        opacity: 0.8,
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
      backgroundColor: "#444",
      opacity: 0.9,
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

    return (
      <GazeButton
        style={{
          flex: 1,
          backgroundColor,
          opacity,
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
      </GazeButton>
    );
  }
}
