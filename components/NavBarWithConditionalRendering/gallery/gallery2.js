import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import VRText from "./vr_text.js";

export default class Gallery2 extends React.Component {
  constructor() {
    super();
    this.state = { slideLeft: new Animated.Value(-1024), fadeIn: new Animated.Value(0)};
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.linear
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 1,
           duration: 2000,
           easing: Easing.bezier(.5,.34,.3,.88)
          }
        )
      ])
    ]).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          opacity: this.state.fadeIn,
          transform: [
            {translateX: this.state.slideLeft}
          ],
        }}
      >
        <VRText>EVERY</VRText>
        <VRText>DAY</VRText>
        <VRText>IS</VRText>
        <VRText>A</VRText>
        <VRText>GOOD</VRText>
        <VRText>DAY</VRText>
      </Animated.View>
    );
  }
}

{
  /* <View style={{
    opacity: 1,
    width: 4096,
    height: 800,
    margin: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    }}
> */
}
// </View>

// updateStage(input) {
//     if(this.state.showButton === false) {
//       this.setState({showButton: true});
//     }
//   switch (input) {
//       case 1:
//         this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0]});
//         break;
//       case 2:
//         this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0]});
//         break;
//       case 3:
//         this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0]});
//         break;
//       case 4:
//         this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0]});
//         break;
//       case 5:
//         this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0]});
//         break;
//       case 6:
//         this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05]});
//         break;
//     }
//   }

// updateScene() {
//     this.setState({color1: "#D8DAF1", color2: "#A482DF", text: "Watch Video"});
// }
