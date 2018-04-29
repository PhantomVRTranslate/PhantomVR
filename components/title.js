import React from "react";
import { View, Animated, asset, Image, Text, VrButton } from "react-vr";
import { Easing } from "react-native";

import GazeButton from "./button/GazeButton";
export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideForward: new Animated.Value(-10),
      slideUp: new Animated.Value(0),
      fadeInTitle: new Animated.Value(0),
      fadeInStart: new Animated.Value(0),
      enteredScene: false,
      buttonLoaded: false
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
        Animated.timing(this.state.slideUp, {
          toValue: .5,
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
          duration: 5000,
          delay: 3000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88),
        })
      ])
    ]).start();

    setTimeout(() => this.setState({ buttonLoaded: true }), 3000);
  }

  handleTrigger() {
    setTimeout(this.props.activateScene, 3000);
    setTimeout(() => this.setState({ enteredScene : true }), 3000);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.slideForward, {
          toValue: -5,
          duration: 3000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
        }),
        Animated.timing(this.state.slideUp, {
          toValue: 2,
          duration: 3000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
        }),
        Animated.timing(this.state.fadeInTitle, {
          toValue: 0.8,
          duration: 3000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.fadeInStart, {
          toValue: 0,
          duration: 3000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88),
        })
      ])
    ]).start();
  }

  render() {
    const { slideForward, slideUp, fadeInTitle, fadeInStart, enteredScene, buttonLoaded } = this.state;

    const { title, startText, titleStyling, startTextStyling } = this.props;

    const defaultTitleStyling = {
      fontSize: 0.6,
      transform: [{ translate: [0, .2, 0] }]
    };

    const mergedTitleStyling = Object.assign({}, defaultTitleStyling, titleStyling);

    const defaultStartTextStyling = {
      fontSize: 0.3,
      textAlign: "center",
      textAlignVertical: "center"
    };

    const mergedStartTextStyling = Object.assign({}, defaultStartTextStyling, startTextStyling);

    return (
      <Animated.View
        style={{
          opacity: fadeInTitle,
          padding: 0.02,
          margin: 0.02,
          width: 50,
          height: 0.3,
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, slideUp, slideForward] }],
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "absolute",
        }}
      >
        <Text
          style={mergedTitleStyling}
        >
          {title || 'Sample Site'}
        </Text>

        { !enteredScene && buttonLoaded ? 
        <GazeButton 
          onTrigger={this.handleTrigger.bind(this)}
          >
          <Animated.View
            style={{
              opacity: fadeInStart,
              width: 15,
              backgroundColor: "transparent"
            }}
          >
            <Text
              style={mergedStartTextStyling}
            >
              {startText || 'Start'}
            </Text>
          </Animated.View>
        </GazeButton> : <View /> }
      </Animated.View>
    );
  }
}
