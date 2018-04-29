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
import Title from "./title";
import GalleryItem from "./gallery/GalleryItem";

export default class PageConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: this.props.store,
      clickEvent: this.props.clickEvent,
      slideLeft: new Animated.Value(-1024),
      fadeIn: new Animated.Value(0)
    };
  }

  // on HTML page users must add these classNames to render desired component
  // class="text-vr" to render a single text card 
  // class="image-vr" to render a single image card on any HTML tag with an src='with the image url' 
  // class="video-vr" to render a single video card on any HTML tag with an src='with the video url' 
  // class="carousel-image-vr" on multiple IMG/HTML tags with an src='with the image url' will render those images within a carousel 
  // class="gallery-list" on multiple IMG and VIDEO HTML tags (max: 6) with an src='with the image/video url' (default 2 units)
  // class="ci-flex-vr" on the LAST image tagged with carousel-image-vr to flex the proportion of the image carousel 
  // class="navlink-vr" (with an href attribute): creates a navlink button with gaze-click functionality to send you to said href location 
    // (with a single-page react application, attach this classname to an element with an onclick event handler to "send" user to correct page) 
    
  generateComponents() {
    let theContent = Object.values(this.state.store);
    let carouselImage = {type: 'image-carousel', content: [], flex: 2}; 
    let galleryItems = {type: 'gallery-list', content: []}; 
    //for each html element tagged carosel-image-vr push it into new object called carouselImage
    Object.values(theContent).forEach(el => {
     if (el.type === 'carousel-image-vr') {
       console.log('el.type is imageCarosel', el, el.content, el.flex); 
       carouselImage.content.push(el.content); 
       carouselImage.flex = parseInt(el.flex) || 2;
  
     } else if (el.type === 'gallery-item') {
       galleryItems.content.push(el.content); 
     }
    });
    console.warn('before galleryitems map', galleryItems); 

    galleryItems.content = galleryItems.content.map((content, i) => {
      return (<GalleryItem src={content} key={i}></GalleryItem>);
    });
    console.warn('post galleryitems map', galleryItems); 

    
    //shove carouselImage into theContent to be rendered into one ImageCarousel component 
    if (galleryItems.content.length > 1) theContent.push(galleryItems); 
    if (carouselImage.content.length > 1) theContent.push(carouselImage);  
  console.warn('THECONTENT AFTER GALLERYITEMS PUSH', theContent); 
       
    let toRender = []; 
    let key;
    Object.values(theContent).map(el => {      
      switch (el.type) {
        case "text-vr":    
            toRender.push(<CardCarousel
              key={el.key}
              flex={1}
              initialCard={0}
              cardType={TEXT}
              maxTextLength={120}
            >
              {el.content}
            </CardCarousel>);
            break;  

            case "image-vr":          
            toRender.push(<ImageCard
              key={el.key}
              passkey={el.key}
              src={el.content}
              click={this.state.clickEvent}
              />);
              break;
              
            case "video-vr":          
              console.log('in VIDEO carosel'); 
            toRender.push(<VideoCard key={el.key} src={el.content} />);
            break; 
            
            case "gallery-list":

              key = Math.floor(Math.random() * 1000000000000); 
              toRender.push(
              <Gallery key={key}>
                {galleryItems.content.map(item => item)}
              </Gallery> );
              break; 
            
            case "image-carousel":  
              console.log('in image carosel'); 
              key = Math.floor(Math.random() * 1000000000000);  
              console.log('this is el.flex and el:', el.flex, el);
            toRender.push(<CardCarousel
              key={key}
              itemCollection={el.content}
              initialCard={0}
              cardType={IMAGE}
              maxTextLength={120}
              flex={el.flex || 2}>
              image
              </CardCarousel>);
              break; 

        default: 
          break; 
      }
    });
    
    return toRender;
  }

  //animation stuff below
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

  componentWillReceiveProps(newProps) {
    this.setState({
      store: newProps.store,
      clickEvent: newProps.clickEvent
    });
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
          easing: Easing.linear
        })
      ])
    ]).start();
  }

  render() {

    // this is what is auto-generating the components
    let components = this.generateComponents();
    return (
      <View>
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            opacity: this.state.fadeIn,
            transform: [{ translateX: this.state.slideLeft }]
          }}>
            {components.map(comp => comp)}
        </Animated.View>
      </View>
    );
  }
}
