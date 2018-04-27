import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import Card from '../cards/Card';
import CardCol from '../cards/CardCol';
import CardSorter from '../cards/CardSorter';
import Gallery from '../gallery/Gallery';
import GazeButton from '../button/GazeButton';
import ImageCaption from '../cards/ImageCaption';
import ImageCard from '../cards/ImageCard';
import TextCard from '../cards/TextCard';
import VideoCard from '../cards/Card';
import { IMAGE, TEXT } from '../carousel/cardTypes.js';
import CardCarousel from "../carousel/carousel.js";

export default class Gallery1 extends React.Component {
  constructor(props) {
    super(props);
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

  componentWillReceiveProps() {
    console.log('hi');
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
           toValue: 1024,
           duration: 2000,
           easing: Easing.linear
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.linear
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
        <TextCard>ojpwef</TextCard>
        <TextCard>ojpwef</TextCard>
        <TextCard>opjwef</TextCard>
        <TextCard>A</TextCard>
        <TextCard>opjwef</TextCard>
        <TextCard>opjwef</TextCard>
      </Animated.View>
    );
  }
}