import React from 'react';
import {
  Image,
  View,
  Text,
} from 'react-vr';

import { IMAGE, TEXT } from './cardTypes.js';
import TextCard from '../../TextCard.js';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      currentItem: this.props.card,
      textSlice: this.props.children,
    }
  }

  componentWillReceiveProps(next) {
    if(this.props.card != next.card){
      this.setState({currentItem: next.card});
    }
    if(this.props.children != next.children) {
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
                margin: 5,
                width: '100%',
                height: '100%',

              }}
              source={this.state.currentItem}
            />
          ) : textType ? (
            <View style={{height:500, width: 500 }}>
            <Text
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,200,200,0.5)',
                    width: "100%",
                    height: "100",
                    maxWidth: 400,
                    maxHeight: 500,
                    lineHeight: 80,
                    fontSize: 40,
                    fontWeight: '400',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    margin: 2,
                }}
              >{this.state.textSlice}</Text>
            </View>
            ) : (
              <Text>Stuff</Text>
            )
          }
      </ View>
    )
  }
}

export default CarouselItem;
