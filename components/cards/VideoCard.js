import React from "react";
import { View, Video, VrButton } from "react-vr";

import CardContainer from "./CardContainer";

export default class VideoCard extends React.Component {
  render() {
    const { cardStyling } = this.props;
    return (
      <CardContainer flex={this.props.flex || 2} cardStyling={cardStyling}>
        <View
          style={{
            width: "100%",
            height: "100%",
            minWidth: 400,
            maxWidth: 800
          }}
        >
          <Video
            source={{
              uri: this.props.src
            }}
            style={{
              width: "100%",
              height: "100%"
              // minWidth: 500,
            }}
          />
        </View>
      </CardContainer>
    );
  }
}
