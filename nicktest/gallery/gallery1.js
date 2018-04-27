import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import VRText from "./vr_text.js";

import Card from '../../components/scenes/layouts/elements/Card';
import CardCol from '../../components/scenes/layouts/elements/Card';
import CardSorter from '../../components/scenes/layouts/elements/Card';
import Gallery from '../../components/scenes/layouts/elements/Card';
import GazeButton from '../../components/scenes/layouts/elements/Card';
import ImageCaption from '../../components/scenes/layouts/elements/Card';
import ImageCard from '../../components/scenes/layouts/elements/Card';
import TextCard from '../../components/scenes/layouts/elements/Card';
import VideoCard from '../../components/scenes/layouts/elements/Card';
import { IMAGE, TEXT } from '../../components/scenes/layouts/elements/CardCarousel/carousel/cardTypes.js';
import CardCarousel from "../../components/scenes/layouts/elements/CardCarousel/carousel/carousel.js";


export default class Gallery1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideLeft: new Animated.Value(-1024), fadeIn: new Animated.Value(0)};
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.linear
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 1,
           duration: 2000,
           easing: Easing.bezier(.5,.34,.3,.88)
          }
        )
      ])
    ]).start();
  }

  componentWillReceiveProps() {
    console.log('hi');
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
           toValue: 1024,
           duration: 2000,
           easing: Easing.linear
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.linear
          }
        )
      ])
    ]).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          opacity: this.state.fadeIn,
          transform: [
            {translateX: this.state.slideLeft}
          ],
        }}
      >
        <VRText>EVERY</VRText>
        <VRText>DAY</VRText>
        <CardSorter options={{type: "video", src: 'https://github.com/mediaelement/mediaelement-files/blob/master/big_buck_bunny.mp4'}} />
        <CardSorter options={{type: "image", src: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'}} />
        <TextCard text={'Four'}></TextCard>
        <CardCarousel itemCollection={[
                  asset("1.jpeg"),
                  asset("2.jpeg"),
                  asset("3.jpeg"),
                  asset("4.jpeg"),
                  asset("5.jpeg")
                ]}
                initialCard={0}
                cardType={TEXT}>asdfaljflkajweflkjawelfjawefjawelkfjalkefjaklwejflkawejfawefjklawjeflkawjeflkawjelka
                                klj there once was a mouse who lived on a house
                                asdfaljflkajweflkjawelfjawefjawelkfjalkefjaklwejflkawejfawefjklawjeflkawjeflkawjelka
                                asdfaljflkajweflkjawelfjawefjawelkfjalkefjaklwejflkawejfawefjklawjeflkawjeflkawjelka
                                </CardCarousel>
        <CardCol>
          <ImageCard src={'https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg'}/>
          <TextCard text={'One'}/> 
        </CardCol>
      </Animated.View>
    );
  }
}

{
  /* <View style={{
    opacity: 1,
    width: 4096,
    height: 800,
    margin: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    }}
> */
}
// </View>

// updateStage(input) {
//     if(this.state.showButton === false) {
//       this.setState({showButton: true});
//     }
//   switch (input) {
//       case 1:
//         this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0]});
//         break;
//       case 2:
//         this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0]});
//         break;
//       case 3:
//         this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0]});
//         break;
//       case 4:
//         this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0]});
//         break;
//       case 5:
//         this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0]});
//         break;
//       case 6:
//         this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05]});
//         break;
//     }
//   }

// updateScene() {
//     this.setState({color1: "#D8DAF1", color2: "#A482DF", text: "Watch Video"});
// }
