import React from 'react';
import {
    View,
    Animated,
    asset,
    Image,
    Text,
    CylindricalPanel
} from 'react-vr';
import {Easing} from 'react-native';
import TextVr from './elements/TextVr.js';
import ContentPlane from './elements/ContentPlane';
import CardCol from './elements/CardCol.js';
import Gallery from "./elements/Gallery";
import CardSorter from "./elements/CardSorter";
import TextCard from "./elements/TextCard.js";
import Card from "./elements/Card.js";
import ImageCard from "./elements/ImageCard.js";
import ImageCaption from "./elements/ImageCaption.js";
import CardCarousel from "./elements/CardCarousel/carousel/carousel.js";
import { IMAGE, TEXT } from './elements/CardCarousel/carousel/cardTypes.js';
import VideoCard from './elements/VideoCard.js';

export default class DashboardLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: [],
        };
    }

    generateComponents() {
        let theContent = this.state.content;
        let toRender = theContent.map((el, i) =>{
            switch(el.type){
                case "text-vr":
                    return (<TextCard text={el.content} /> );
                case "image-vr":
                    return(<ImageCard src={el.content} />);
                case "video-vr":
                    return(<VideoCard src={el.content} />);
                default:
                    return null;
                }
            });
        return toRender;

    }

    componentWillReceiveProps(newProps){
        this.setState(newProps);
    }

    //ContentPlane is the CylinderPanel that has the row flexbox
    //CPC

    render() {
        let words = "Hello";
        let components = this.generateComponents(this.props.content);
        return (
            <ContentPlane >
                <Gallery >
                    {components[0]}
                    {components[1]}
                    {components[2]}

                    {/* The following does not work.  Uncertain as to why. */}
                    {/* {components.map((comp) => {
                        comp;
                    })} */}
                    {/* <TextCard text={'TWO'}></TextCard>
                    <TextCard text={'THREE'}></TextCard> */}
                    <CardSorter options={{type: "video", src: '../static_assets/videos/fireplace.mp4'}} />
                    <CardSorter options={{type: "image", src: '../static_assets/pictures/pup.jpg'}} />
                    <TextCard text={'Four'}></TextCard>
                </Gallery>
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

                {components.map((comp, i) =>
                    (<Card key={i}>{comp}</Card>)
                )}
                <CardCol>
                    <CardSorter options={{type: "image", src: '../static_assets/pictures/pup.jpg'}} />
                    <ImageCard src={'../static_assets/pictures/pup.jpg'}/>

                </CardCol>
                {/* Blank Card Works */}

                {/* Must hover over image for text to dipslay */}
                <ImageCaption src={'../static_assets/pictures/pup.jpg'}>Caption</ImageCaption>

                <Card>
                    <ImageCard src={'../static_assets/pictures/pup.jpg'}/>
                    {/* <TextCard text={'One'}/>  */}
                </Card>

             </ContentPlane>
        );
    }
}
