import React from 'react';
import {
  Image,
  View,
  Text,
} from 'react-vr';

import { IMAGE, TEXT } from './cardTypes.js';
import TextCard from '../cards/TextCard.js';

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
    if(this.props.card != next.card){
      this.setState({currentItem: next.card});
    }
    if(this.props.children != next.children) {
      this.setState({textSlice: next.children});
    }
  }

  componentDidMount(){
    this.setState({
      currentItem: this.props.card
    });
  }

  render() {
    const imageType = this.props.cardType === IMAGE;
    const textType = this.props.cardType === TEXT;
    return (
      <View >
        { imageType ?
             (
            
            <Image
              style={{
                width: '100%',
                height: '100%',

              }}
              source={{uri: this.state.currentItem}}
            />
            
            
          ) : textType ? (
            <View style={{height:'100%', width: '100%' }}>
            <Text
                style={{
                    width: "100%",
                    height: "100%",
                    fontSize: 40,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    marginBottom: this.props.flex > 1 ? 0 : 100,
                }}
              >{this.state.textSlice}
              </Text>
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
