import React from "react";
import { imageTypes } from "./imageTypes";
import GazeButton from "../button/gazeButton";
import {
    asset,
    Image,
    View,
    VrButton,
    Animated,
    Button,
    StyleSheet,
    Text,
    CylindricalPanel
} from 'react-vr';
import GalleryImage from "./galleryImage";

class Gallery extends React.Component{
    constructor(props){
        super(props);

        this.goToNext = this.goToNext.bind(this);
        this.rotateGallery = this.rotateGallery.bind(this);
        this.goToPrev = this.goToPrev.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.state = {
            imageNumber: this.props.initialImage,
            containerWidth: this.calculateWidth(props.images),
            galleryRotation: new Animated.Value(this.getPosition(props.images, props.initialImage))
        };
    }

    calculateWidth(images){
        return this.imageDimensions[this.props.type].style.width * this.props.images.length;
    }

    goToNext(){
        const nextImageNum = this.state.imageNumber + 1;
        const nextRotation = this.getPosition(this.props.images, nextImageNum);
        this.setState({
            imageNumber: nextImageNum
        });
        this.rotateGallery(nextRotation);
    }

    goToPrev(){
        const prevImageNum = this.state.imageNumber - 1;
        const nextRotation = this.getPosition(this.props.images, prevImageNum);
        this.setState({
            imageNumber: prevImageNum
        });
        this.rotateGallery(nextRotation);
    }

    rotateGallery(rotation){
        const animation = Animated.timing(this.state.galleryRotation, {
            toValue: rotation,   
            duration: 150
        });
        animation.start();
    }

    getPosition(images, imageNumber){
        const { type, initialImage } = this.props;
        const boxWidth = this.imageDimensions[type].vrWidth;
        const boxPosition = imageNumber * boxWidth;
        const basePosition = -(boxWidth / 2);
        return -(basePosition + ((images.length / 2) + -(imageNumber - 1)) * boxWidth);
    }

    render(){
        const { images } = this.props; 
        const { imageNumber } = this.state;    
        const { containerWidth, galleryRotation } = this.state;
        const imageStyle = this.imageDimensions[this.props.type].style;
        const canNext = imageNumber < images.length;
        const canPrev = imageNumber > 1;
        return (

            <View>
                        <View style={{
                            opacity: 1,
                            flex:1,
                            flexDirection:"row",
                            width: containerWidth,
                            height: 500,
                            justifyContent: 'flex-start',
                        }} >      
                            {this.props.images.map((image, idx) => {
                                const isSelected = (idx + 1) == imageNumber;
                                return (
                                    <GalleryImage
                                        imageStyle={imageStyle}
                                        src={image}
                                        isSelected={isSelected}
                                    />   
                                );
                            })}                          
                        </View>


              <VrButton
              style={{
                borderRadius: 40,
                opacity: 0.85,
                paddingLeft: 0.06,
                borderWidth: 0.01,
                width: 70,
                height: 70,
                backgroundColor: "#333",
                borderColor: "#222",
                position: "absolute",
                left: 10,
                bottom: 10
              }}
                disabled={false}
                onClick={
                  this.state.cardType === 'IMAGE' ? this.prevCard : this.prevSlice
                }
              >
                <Text
                  style={{
                    color: "white",
                    bottom: 25,
                    left: 10,
                    fontSize: 80,
                    fontWeight: "bold"
                  }}
                >
                  {"<"}
                </Text>
              </VrButton>
              <VrButton
                disabled={false}
                onClick={
                  this.state.cardType === 'IMAGE' ? this.nextCard : this.nextSlice
                }
                style={{
                  borderRadius: 40,
                  opacity: 0.85,
                  paddingLeft: 0.06,
                  borderWidth: 0.01,
                  width: 70,
                  height: 70,
                  backgroundColor: "#333",
                  borderColor: "#222",
                  position: "absolute",
                  right: 10,
                  bottom: 10
                }}
              >
                <Text
                  style={{
                    color: "white",
                    bottom: 25,
                    left: 15,
                    fontSize: 80,
                    fontWeight: "bold"
                  }}
                >
                  {">"}
                </Text>
              </VrButton>
            </View>
        );
    }
}

export default Gallery;