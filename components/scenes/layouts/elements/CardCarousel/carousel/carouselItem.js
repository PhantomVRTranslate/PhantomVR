import React from 'react';
import {
  Image,
  View,
} from 'react-vr';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      currentImage: this.props.card,
    }
  }

  componentWillReceiveProps(next) {
    if(this.props.card != next.card){
      this.setState({currentImage: next.card});
    }
  }

  render() {

    return (
      <View>
        <Image
          style={{
            margin: 5,
            flexDirection:"column",
            height: 500,
            width: 500,
            transform: [{translate: [ 0, 0, -500]}],
          }}
          source={this.state.currentImage}

        />
      </ View>
    )
  }
}

export default CarouselItem;
