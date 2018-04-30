import React from "react";
import { View, Text, VrButton } from "react-vr";

import CardContainer from "./CardContainer";

export default class TextCard extends React.Component {
  render() {
    const { cardStyling, textStyling, flex } = this.props;

    const defaultCardStyling = {
        padding: 5,
      };

<<<<<<< HEAD
    const mergedCardStyling = Object.assign({}, defaultCardStyling, cardStyling);
=======
    const mergedCardStyling = Object.assign({}, defaultCardStyling, cardStyling);  
>>>>>>> 64698df167a8f89ebe3047fb3a6d1567ea4f8bec
    
    const defaultTextStyling = {
      width: "100%",
      height: "100%",
      maxHeight: 500,
      lineHeight: 80,
      fontSize: 40,
      fontWeight: "400",
      textAlign: "center",
      textAlignVertical: "center"
    };

    const mergedTextStyling = Object.assign({}, defaultTextStyling, textStyling);

    return (
      <CardContainer 
        flex={flex || 1}
        cardStyling={mergedCardStyling}>
          <Text
            style={mergedTextStyling}
          >
            {this.props.src || this.props.text || this.props.children}
          </Text>
      </CardContainer>
    );
  }
}
