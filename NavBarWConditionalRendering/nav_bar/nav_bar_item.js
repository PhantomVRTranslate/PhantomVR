import React, { Component } from "react";
import { asset, Animated, Text, Image } from "react-vr";
import { Easing } from "react-native";

import GazeButton from "../button/gaze_button";

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    const isSelected = this.props.currGallery === this.props.link;

    const backgroundColor = isSelected ? "#333" : "#222";

    const fontSize = isSelected
      ? new Animated.Value(0.11)
      : new Animated.Value(0.1);

    this.state = {
      backgroundColor,
      fontSize,
      isSelected
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currGallery !== nextProps.link && this.state.isSelected) {
      this.setState({
        backgroundColor: "#222",
        isSelected: false
      });

      Animated.timing(this.state.fontSize, {
        toValue: 0.1,
        duration: 200,
        easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
      }).start();
    }
  }

  handleTrigger() {
    this.setState({
      backgroundColor: "#333",
      isSelected: true
    });

    Animated.timing(this.state.fontSize, {
      toValue: 0.11,
      duration: 200,
      easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
    }).start();

    // // When the gaze button is triggered, it changes the 'link'
    this.props.changeGallery(this.props.link);
  }

  render() {
    const { backgroundColor, opacity, fontSize, isSelected } = this.state;

    return (
      <GazeButton
        buttonStyle={{
          backgroundColor,
          margin: 0.01
        }}
        progressDisabled={isSelected}
        onTrigger={this.handleTrigger.bind(this)}
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
