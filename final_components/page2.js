import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import CardContainer from "./cards/CardContainer";
import CardCol from "./cards/CardCol";
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

export default class Page2 extends React.Component {
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
          // itemCollection={[
          //   asset("1.jpeg"),
          //   asset("2.jpeg"),
          //   asset("3.jpeg"),
          //   asset("4.jpeg"),
          //   asset("5.jpeg")
          // ]}
          initialCard={0}
          cardType={TEXT}
          maxTextLength={120}
        >
          {/* {`There once was a man from Peru who dreamed he was eating his shoe\n
          He woke with a fright In the middle of the night\n
          To find that his dream had come true.\n
          There once was a man from Peru who dreamed he was eating his shoe\n
          He woke with a fright\n
          In the middle of the night\n
          To find that his dream had come true.`} */}

          <Text>Hello</Text>
          <Text>Goodbye</Text>
          <Text>Thanks</Text>
          <Text>Welcome</Text>

        </CardCarousel>
        {/* <TextCard flex={2}>ojpwef</TextCard> */}
        {/* <Gallery>
          {/* The following does not work.  Uncertain as to why. */}
          {/* {components.map((comp) => {
                        comp;
                    })} */}
          {/* <TextCard text={'TWO'}></TextCard>
                    <TextCard text={'THREE'}></TextCard> */}
          {/* <CardSorter options={{type: "video", src: '../static_assets/videos/fireplace.mp4'}} />
                    <CardSorter options={{type: "image", src: '../static_assets/pictures/pup.jpg'}} /> */}
          {/*<GalleryItem
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
        </Gallery> */}
        {/* <ImageCard flex={1} src={'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg'}/> */}
        <CardSorter
          options={{
            type: "video",
            src: "../static_assets/videos/fireplace.mp4"
          }}
        />
        {/* <VideoCard src={'../static_assets/videos/fireplace.mp4'}/> */}
        {/* <TextCard>A</TextCard> */}
        {/* <ImageCaption flex={1} src={'../static_assets/pictures/pup.jpg'}>A puppy.</ImageCaption> */}

        <Gallery>
          <GalleryItem
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
          <GalleryItem
            src={
              "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg"
            }
          />
        </Gallery>

        {/* <CardSorter options={{type: "image", src: '../static_assets/pictures/pup.jpg'}} /> */}
        {/* <CardSorter options={{type: "image", src: '../static_assets/pictures/pup.jpg'}} /> */}

        {/* <TextCard>ojpwef</TextCard> */}
      </Animated.View>
    );
  }
}
