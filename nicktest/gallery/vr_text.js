import React, { Component } from "react";
import { asset, Animated, Text } from "react-vr";

export default class VRText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text
        style={{
          flex: 1,
          backgroundColor: "rgba(0,200,200,0.5)",
          color: "#FFF",
          fontSize: 50,
          textAlign: "center",
          textAlignVertical: "center",
          //combo of height && max height to ensure one component doesn't take up the whole 180º
          height: '100%',
          maxHeight: 500,
          width: 400,
          margin: 10
        }}
      >
        {this.props.children || this.props.text}
      </Text>
    );
  }
}
