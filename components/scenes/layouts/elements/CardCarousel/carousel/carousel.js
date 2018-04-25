import React from 'react';
import {
  View,
  Text
} from 'react-vr';

import CarouselItem from './carouselItem';
import GazeButton from '../gaze_button/gaze_button';

class CardCarousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cardNumber: this.props.initialCard,
    }

    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
  }

  nextCard() {
    const nextCardNum = this.state.cardNumber + 1;

    if(nextCardNum > this.props.itemCollection.length - 1) {
      this.setState({
        cardNumber: 0
      });
    } else {
      this.setState({
        cardNumber: nextCardNum
      });
    }

  }
  prevCard() {
    const prevCardNum = this.state.cardNumber - 1;
    console.log(this.state.cardNumber);

    if( prevCardNum < 0 ) {
      this.setState({
        cardNumber: this.props.itemCollection.length - 1
      });
    } else {
      this.setState({
        cardNumber: prevCardNum
      })
    }

  }

  render() {
    const { itemCollection } = this.props;
    const canNext = this.state.cardNumber < itemCollection.length;
    const canPrev = this.state.cardNumber > 0;

    return (
      <View
        style={{position:"absolute"}}
      >
      <View style={{
        opacity: 1,
        flex: 1,
        flexDirection: 'row',
        width: 500,
        height: 500,
        justifyContent: 'flex-start'
      }} >
          <CarouselItem card={this.props.itemCollection[this.state.cardNumber]} />
      </View>
      <View>
          <GazeButton disabled={false} onClick={this.prevCard}
              buttonStyle={{
                  borderRadius:40,
                  opacity:.85,
                  paddingLeft:.06,
                  borderWidth:.01,
                  width:70,
                  height:70,
                  backgroundColor:"#333",
                  borderColor:"#222"
              }}
              containerStyle={{
                  position:"absolute",
                  transform: [{
                      translate: [30,100,-499]
                  }]
              }}>
                  <Text style={{
                      color:"white",
                      bottom:25,
                      left: 10,
                      fontSize: 80,
                      fontWeight: "bold",
                  }}>
                      {"<"}
                  </Text>
          </GazeButton>
          <GazeButton disabled={false} onClick={this.nextCard}
              buttonStyle={{
                borderRadius:40,
                opacity:.85,
                paddingLeft:.06,
                borderWidth:.01,
                width:70,
                height:70,
                backgroundColor:"#333",
                borderColor:"#222"
              }}
              containerStyle={{
                position:"absolute",
                transform: [{
                    translate: [400,100,-470]
                }]
              }}>
              <Text style={{
                color:"white",
                bottom:25,
                left: 15,
                fontSize: 80,
                fontWeight: "bold",
              }}>
                  {">"}
              </Text>
          </GazeButton>
        </View>
      </View>
    )
  }


}

export default CardCarousel;
