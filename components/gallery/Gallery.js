import React, { Component } from "react";
import {
  asset,
  Animated,
  Pano,
  Text,
  View,
  Image,
  CylindricalPanel
} from "react-vr";

import CardContainer from "../cards/CardContainer";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    const rows = this.props.rows || 2;
    const cols = this.props.cols || Math.ceil(this.props.children.length / 2);
    this.renderCards(rows, cols);
  }

  generateCard(child, rows, cols, i) {
    const width = this.props.rows === 3 ? `${90 / cols}%` : `${95 / cols}%`;
    const height = this.props.rows === 3 ? `${90 / rows}%` : `${95 / rows}%`;
    
    const { galleryItemStyling } = this.props;
    
    const defaultStyling = {
      width,
      height,
      margin: 5,
      borderWidth: 2,
      borderColor: "#333",
      backgroundColor: "#012020"
    };

    const mergedGalleryItemStyling = Object.assign({}, defaultStyling, galleryItemStyling);
    
    return (
      <View
        style={mergedGalleryItemStyling}
        key={i}
      >
        {child}
      </View>
    );
  }

  renderCards(rows, cols) {
    let cards = [];
    for (let i = 0; i < this.props.children.length; i++) {
      cards.push(this.generateCard(this.props.children[i], rows, cols, i));
    }
    this.setState({
      cards: cards
    });
  }

  render() {
    const { galleryStyling, galleryItemStyling } = this.props;
    return (
      <CardContainer
        flex={
          this.props.flex ||
          Math.ceil(this.state.cards.length / (this.props.rows || 2))
        }
        cardStyling={galleryStyling}
      >
        <View
          style={{
            opacity: 1,
            height: "100%",
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {this.state.cards}
        </View>
      </CardContainer>
    );
  }
}
