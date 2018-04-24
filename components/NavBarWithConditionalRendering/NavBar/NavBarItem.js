import React, { Component } from "react";
import { asset, Animated, Text, Image } from "react-vr";

import GazeButton from '../button/gaze_button';

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    const isSelected = this.props.currGallery === this.props.link;

    const backgroundColor = isSelected ? '#444' : '#222';
    const opacity = isSelected ? .9 : .8;
    const fontSize = isSelected ? .11 : .1;

    this.state = {
        backgroundColor,
        opacity,
        fontSize,
        isSelected
    }

    // console.log(this.props.currGallery, this.props.link);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currGallery !== nextProps.link && this.state.isSelected) {
    this.setState({
        backgroundColor: '#222',
        opacity: .8,
        fontSize: .1,
        isSelected: false
      });
    }
  }

  handleHover(e) {
    if (!this.state.isSelected) {
    this.setState({
        backgroundColor: '#333',
        opacity: .85,
        fontSize: .1
    });
  }
  }

  handleLeave(e) {
    if (!this.state.isSelected) {
    this.setState({
        backgroundColor: '#222',
        opacity: .8,
        fontSize: .1
    });
  }
  }

  handleTrigger() {
    this.setState({
      backgroundColor: '#444',
      opacity: .9,
      fontSize: .11,
      isSelected: true
  });

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
          height: '100%',
          margin: .01,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onHover={this.handleHover.bind(this)}
        onTrigger={this.handleTrigger.bind(this)}
        onLeave={this.handleLeave.bind(this)}
        >
        <Text style={{
          fontSize,
          color: "#FFF",
        }}>
        {this.props.children}
        </Text>
      </GazeButton>
    );
  }
}
