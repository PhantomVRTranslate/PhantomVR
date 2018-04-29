import React from 'react';
import {
  Image,
  View,
  Text,
} from 'react-vr';

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

    return (
      <View>
        { this.props.type === "image" ?
            (<Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{uri: this.state.currentItem}}
            />
          ) : (
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
            )
          }
      </ View>
    );
  }
}

export default CarouselItem;
