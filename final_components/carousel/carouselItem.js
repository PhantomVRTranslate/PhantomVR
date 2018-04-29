import React from 'react';
import {
  Image,
  View,
  Text,
} from 'react-vr';

import { IMAGE, TEXT } from './cardTypes.js';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      currentItem: this.props.card,
      textSlice: this.props.children,
    };
  }

  componentWillReceiveProps(next) {
    if(this.props.card !== next.card){
      this.setState({currentItem: next.card});
    }
    if(this.props.children !== next.children) {
      this.setState({textSlice: next.children});
    }
  }

  render() {

    const imageType = this.props.cardType === IMAGE;
    const textType = this.props.cardType === TEXT;

    return (
      <View>
        { imageType ?
            (<Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{uri: this.state.currentItem}}
            />
          ) : textType ? (
            <View style={{
              width: '100%',
              height: '100%',
              padding: 30,
            }}>
            <Text
                style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    lineHeight: 80,
                    fontSize: 40,
                    fontWeight: '400',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}
              >{this.state.textSlice}</Text>
            </View>
            ) : (
              <Text>Stuff</Text>
            )
          }
      </ View>
    );
  }
}

export default CarouselItem;
