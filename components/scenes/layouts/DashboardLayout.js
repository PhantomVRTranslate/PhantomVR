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
import VideoCard from './elements/VideoCard.js';
export default class DashboardLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: [],
        };
    }

    generateComponents() {
        console.log("store", this.state);
        let theContent = this.state.content;
        console.log("theContent", theContent[0]);
        let toRender = theContent.map(el =>{
            console.log("el", el);
            switch(el.type){
                case "text-vr":
                console.log("in text", el.content);
                    return (<TextCard text={el.content} /> );
                case "image-vr":
                    return(<ImageCard src={el.content} />);
                case "video-vr":
                    return(<VideoCard src={el.content} />);
                default: 
                    return null; 
                }
            });
        console.log('generateComp from forward', toRender);
        return toRender; 

    }

    componentWillReceiveProps(newProps){
        console.log("newProps", newProps);
        this.setState(newProps);
    }

    //ContentPlane is the CylinderPanel that has the row flexbox
    //CPC

    render() {
        console.log('rendering dashboard layout', this.props);
        let words = "Hello omg whats going on baby, idk but its pretty frosty outside, maybe the snowman and the lumberjack can make me some pancakes to relieve me of my depression";
        let components = this.generateComponents(this.props.content);
        let component = components[0];
        console.log("in render", components[0]);
        let two = (<TextCard text={'TWO'}></TextCard>);
        console.log('two', two);
        return (
            <ContentPlane >
                <Gallery >
                    {components[0]}
                    {two}
                    <TextCard text={'THREE'}></TextCard>
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
                initialCard={0}/>
                {components.map((comp) => 
                    (<Card>{comp}</Card>)
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
