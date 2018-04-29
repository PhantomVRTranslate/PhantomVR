import React, { Component } from "react";
import { asset, Animated, Text, Image } from "react-vr";
import { Easing } from "react-native";

import GazeButton from "../button/GazeButton";

export default class NavbarItem extends React.Component {
  constructor(props) {
    super(props);

    const isSelected = this.props.currGallery === this.props.link;

    const backgroundColor = isSelected ? "#333" : "#222";

    const fontSize = isSelected ? 0.11 : 0.1;

    this.state = {
      backgroundColor,
      fontSize,
      isSelected,
      isTriggered: false // removes progress bar between activation and unmounting
    };
  }

  componentWillReceiveProps(nextProps) {
    // will hit after fake dispatch of changeGallery
    if (
      this.props.currGallery === this.props.link &&
      nextProps.currGallery === nextProps.link
    ) {
      this.setState({
        backgroundColor: "#222",
        fontSize: 0.1,
        isSelected: false
      });
      // will hit after real dispatch
    } else if (nextProps.currGallery === nextProps.link) {
      this.setState({
        isSelected: true,
        isTriggered: false
      });
    }
  }

  handleTrigger() {
    if (this.props.currGallery !== this.props.link) {
      this.setState({
        backgroundColor: "#333",
        isSelected: true,
        fontSize: 0.11
      });

      // When the gaze button is triggered, it changes the 'link'
      this.props.changeGallery(this.props.currGallery); // fake out changeGallery to get component to 'unmount'
      this.setState({ isTriggered: true });
      setTimeout(() => this.props.changeGallery(this.props.link), 1500);
    }
  }

  onHover() {}

  render() {
    const {
      backgroundColor,
      opacity,
      fontSize,
      isSelected,
      isTriggered
    } = this.state;

    return (
      <GazeButton
        buttonStyle={{
          backgroundColor,
          margin: 0.01
        }}
        progressDisabled={isSelected || isTriggered}
        onTrigger={this.handleTrigger.bind(this)}
        onHover={this.onHover.bind(this)}
        onLeave={() => {}}>
        <Animated.Text
          style={{
            fontSize,
            color: "#FFF"
          }}>
          {this.props.children}
        </Animated.Text>
      </GazeButton>
    );
  }
}
