import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import CardContainer from "./cards/CardContainer";
import CardSorter from "./cards/CardSorter";
import Gallery from "./gallery/Gallery";
import GazeButton from "./button/GazeButton";
import ImageCaption from "./cards/ImageCaption";
import ImageCard from "./cards/ImageCard";
import TextCard from "./cards/TextCard";
import VideoCard from "./cards/VideoCard";
import { IMAGE, TEXT } from "./carousel/cardTypes.js";
import CardCarousel from "./carousel/carousel.js";

import GalleryItem from "./gallery/GalleryItem";

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideLeft: new Animated.Value(-1024),
      fadeIn: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.slideLeft, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.fadeIn, {
          toValue: 1,
          duration: 2000,
          easing: Easing.bezier(0.5, 0.34, 0.3, 0.88)
        })
      ])
    ]).start();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.slideLeft, {
          toValue: 1024,
          duration: 2000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.fadeIn, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear
        })
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
          transform: [{ translateX: this.state.slideLeft }]
        }}
      >
        <CardCarousel
          flex={1}
          itemCollection={[
            'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
            'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d',
            'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
            'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d',
            'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
          ]}
          initialCard={0}
          cardType={TEXT}
          maxTextLength={120}
        >
        opjwefopjwefopjwefopjwefopjwefopjwefopjwefopjweopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjwefopjweffopjwefopjwefopjwefopjwefopjwefopjwefopjwef
        </CardCarousel>
        {/* <TextCard flex={2}>ojpwef</TextCard> */}
        {/* <Gallery flex={2}>
          <GalleryItem
          type="image"
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
           type="text"
            text="Hello smelly"
          />
          <GalleryItem
           type="image"
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
           type="image"
            src="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
          />
          <GalleryItem
           type="image"
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
           type="image"
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
        </Gallery> */}
        {/* <ImageCard flex={1} src={'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg'}/> */}
        {/* <CardSorter
          options={{
            type: "video",
            src: "../static_assets/videos/fireplace.mp4"
          }}
        />
        {/* <VideoCard src={'../static_assets/videos/fireplace.mp4'}/> */}
        {/* <TextCard>Hello! It's a good day to be eating Christmsas</TextCard> */}
        {/* <ImageCaption 
          flex={1} 
          src={'../static_assets/pictures/pup.jpg'} 
          caption="A puppy."
          alwaysShow={false}
           /> */}

        <Gallery>
          <GalleryItem
          type="image"
            src="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
          />
          <GalleryItem
          type="image"
            src="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
          />
        </Gallery>

        <TextCard>ojpwef</TextCard>
      </Animated.View>
    );
  }
}
