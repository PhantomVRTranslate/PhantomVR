import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import CardContainer from '../cards/CardContainer';
import CardCol from '../cards/CardCol';
import CardSorter from '../cards/CardSorter';
import Gallery from '../gallery/Gallery';
import GazeButton from '../button/GazeButton';
import ImageCaption from '../cards/ImageCaption';
import ImageCard from '../cards/ImageCard';
import TextCard from '../cards/TextCard';
import VideoCard from '../cards/VideoCard';
import { IMAGE, TEXT } from '../carousel/cardTypes.js';
import CardCarousel from "../carousel/carousel.js";

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
          justifyContent: "center",
          height: "100%",
          opacity: this.state.fadeIn,
          transform: [
            {translateX: this.state.slideLeft}
          ],
        }}
      >
        {/* <TextCard flex={2}>ojpwef</TextCard> */}
        <ImageCard flex={1} src={'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg'}/>
        <CardSorter options={{type: "video", src: '../static_assets/videos/fireplace.mp4'}} />
        {/* <VideoCard src={'../static_assets/videos/fireplace.mp4'}/> */}
        {/* <TextCard>A</TextCard> */}
        {/* <CardCarousel itemCollection={[
                  asset("1.jpeg"),
                  asset("2.jpeg"),
                  asset("3.jpeg"),
                  asset("4.jpeg"),
                  asset("5.jpeg")
                ]}
                initialCard={0}
                cardType={IMAGE} maxTextLength={120}><Text>There once was a man from Peru</Text>
                <Text>Who dreamed he was eating his shoe</Text>
                <Text>He woke with a fright</Text>
                <Text>In the middle of the night</Text>
                <Text>To find that his dream had come true.</Text>
                </CardCarousel> */}
                <ImageCaption flex={1} src={'../static_assets/pictures/pup.jpg'}>A puppy.</ImageCaption>

                {/* <CardCol>
          <Image source={asset("1.jpeg")} />
          <Image source={{uri: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg'}} />
          <Image source={{uri: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg'}} />
                  
                  </CardCol> */}

          {/* <CardSorter options={{type: "image", src: '../static_assets/pictures/pup.jpg'}} /> */}
          {/* <CardSorter options={{type: "image", src: '../static_assets/pictures/pup.jpg'}} /> */}

        {/* <TextCard>ojpwef</TextCard> */}
      </Animated.View>
    );
  }
}