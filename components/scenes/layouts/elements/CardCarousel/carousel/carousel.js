import React from 'react';
import {
  View,
  Text
} from 'react-vr';

import CarouselItem from './carouselItem';
import GazeButton from '../gaze_button/gaze_button';
import { IMAGE, TEXT } from './cardTypes';

class CardCarousel extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      cardNumber: this.props.initialCard,
      textSlices: [],
      currentTextSlice: 0,
      cardType: this.props.cardType,
    }

    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
    this.textSet = this.textSet.bind(this);
  }

  componentDidMount() {
    this.textSet();
  }

  textSet(iterateCount = 95) {

      const text = this.props.children || this.props.text;
      if (text.length < 95) {
        this.setState({currentTextSlice: 0});
      } else {
          for(let i = 0; i < text.length; i += iterateCount){
              if (text.length - i >= iterateCount){
                  this.state.textSlices.push(text.slice(i, (i + iterateCount)));
              }else{
                  this.state.textSlices.push(text.slice(i, (i + iterateCount)));
              }
          }
          this.setState({currentTextSlice: 0});
      }
      console.log(this.state.textSlices);


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
      <View>
      <View style={{
        opacity: 1,
        flex: 1,
        width: '100%' ,
        height: '100%',
        minHeight: 250,
        maxHeight: 500,
        maxWidth: 400
      }} >
          <CarouselItem card={this.props.itemCollection[this.state.cardNumber]}
                        cardType={this.state.cardType}>{this.state.textSlices[this.state.currentTextSlice]}</CarouselItem>

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
                position: 'absolute',
                transform: [{
                    translate: [20,100,0]
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
                    translate: [320,100,0]
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
      </View>
    )
  }


}

export default CardCarousel;
