import React from "react";
import { View, Animated, asset, Image, Text, VrButton } from "react-vr";
import { Easing } from "react-native";

import { NavLink } from 'react-router-dom';

import NavBarItem from "./nav_bar_item.js";


export default class BottomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      slideForward: new Animated.Value(-5), 
      slideUp: new Animated.Value(-4),
      fadeIn: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideForward,
          {
           toValue: -1.5,
           duration: 3000,
           easing: Easing.bezier(.5,.34,.3,.88)
          }
        ),
        Animated.timing(
          this.state.slideUp,
          {
           toValue: -1,
           duration: 3000,
           easing: Easing.bezier(.5,.34,.3,.88)
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 1,
           duration: 4000,
           easing: Easing.linear
          }
        )
      ])
    ]).start();
  }

  render() {
    const { content, changeGallery, gallery } = this.props;

    const currGallery = gallery.type.name.toLowerCase()

    return (
      <Animated.View
        style={{
          backgroundColor: "#111",
          opacity: this.state.fadeIn,
          borderWidth: 0.002,
          borderColor: "#444",
          padding: .02,
          width: 1.5,
          height: 0.3,
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, this.state.slideUp, this.state.slideForward] }, { rotateX: "-45deg" }],
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        {content.map((el, idx) => (
        <NavBarItem 
          changeGallery={changeGallery} 
          currGallery={currGallery}
          link={el.link} 
          key={idx}
          >
            {el.label}
          </NavBarItem>)
        )}
      </Animated.View>
    );
  }
}
