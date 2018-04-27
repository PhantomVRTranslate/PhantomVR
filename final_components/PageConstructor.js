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
import Title from './title';
import GalleryItem from "./gallery/GalleryItem";

export default class PageConstructor extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROPS in contructor:', props); 
    this.state = {
        store: this.props.store,
        clickEvent: this.props.clickEvent,
        slideLeft: new Animated.Value(-1024),
        fadeIn: new Animated.Value(0)
    };
  }



  generateComponents() {    
    let theContent = Object.values(this.state.store);    
    let toRender = Object.values(theContent).map(el =>{
                console.log('what is el?', el); 
        switch(el.type){
            case "text-vr":
                return (<TextCard key={el.key} text={el.content} clickEvent={this.state.clickEvent}/> );
            case "image-vr":
                return(<ImageCard key={el.key} passkey={el.key} src={el.content} click={this.state.clickEvent}/>);
            case "video-vr":
                return(<VideoCard key={el.key} src={el.content} />);
            default:
                return null;
            }
        });
    return toRender;

}

//animation stuff below 
  componentDidMount() {
    console.log('comp did Mountt:', this.props); 
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
/////////
  render() {
      // this is what is generating the components 
    let components = this.generateComponents();        

    console.warn('in pageconstructor', this.state); 
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
          }}
        >
        {components.map((comp) => comp )}
        </Animated.View>
      </View> 
    );
  }
}
