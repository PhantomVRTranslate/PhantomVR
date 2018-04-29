import React, { Component } from "react";
import { asset, Animated, Text, Image } from "react-vr";
import { Easing } from "react-native";

import GazeButton from "../button/GazeButton";

export default class NavbarItem extends React.Component {
  constructor(props) {
    super(props);

    const isSelected = this.props.currPage === this.props.link;

    this.bgColor = this.props.linkBgColor ? this.props.linkBgColor : "#222";
    this.selectedColor = this.props.linkSelectedColor ? this.props.linkSelectedColor : "#333";

    const backgroundColor = isSelected ? this.selectedColor : this.bgColor;

    const fontSize = isSelected ? 0.11 : 0.1;

    this.state = {
      backgroundColor,
      fontSize,
      isSelected,
      isTriggered: false // removes progress bar between activation and unmounting
    };
  }

  componentWillReceiveProps(nextProps) {
    // will hit after fake dispatch of changePage
    if (
      this.props.currPage === this.props.link &&
      nextProps.currPage === nextProps.link
    ) {
      this.setState({
        backgroundColor: this.bgColor,
        fontSize: 0.1,
        isSelected: false
      });
      // will hit after real dispatch
    } else if (nextProps.currPage === nextProps.link) {
      this.setState({
        isSelected: true,
        isTriggered: false
      });
    }
  }

  handleTrigger() {
    if (this.props.currPage !== this.props.link) {
      this.setState({
        backgroundColor: this.selectedColor,
        isSelected: true,
        fontSize: 0.11
      });

      // When the gaze button is triggered, it changes the 'link'
      this.props.changePage(this.props.currPage); // fake out changePage to get component to 'unmount'
      // this.props.changePage(this.props.link); // fake out changePage for scraper
      this.setState({ isTriggered: true });
      setTimeout(() => this.props.changePage(this.props.link), 1500);
    }
  }

  render() {
    const {
      backgroundColor,
      opacity,
      fontSize,
      isSelected,
      isTriggered
    } = this.state;

    const { progressColor, progressDisabled } = this.props;

    return (
      <GazeButton
        buttonStyle={{
          backgroundColor,
          margin: 0.01
        }}
        progressColor={progressColor}
        progressDisabled={progressDisabled || (isSelected || isTriggered)}
        onTrigger={this.handleTrigger.bind(this)}
        onHover={() => {}}
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
