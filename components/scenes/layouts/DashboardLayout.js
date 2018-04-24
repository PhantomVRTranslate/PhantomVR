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
export default class DashboardLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }


//ContentPlane is the CylinderPanel that has the row flexbox

//CPC

    render() {
        console.log('rendering dashboard layout'); 
        let words = "Hello omg whats going on baby, idk but its pretty frosty outside, maybe the snowman and the lumberjack can make me some pancakes to relieve me of my depression";
        return (
            <ContentPlane > 
                <Gallery >
                    <TextCard text={words}></TextCard>
                    <TextCard text={'TWO'}></TextCard>
                    <TextCard text={'THREE'}></TextCard>
                    <CardSorter options={{type: "video", src: '../static_assets/videos/fireplace.mp4'}} />
                    <CardSorter options={{type: "image", src: '../static_assets/pictures/pup.jpg'}} />
                    <TextCard text={'FOur'}></TextCard>
                </Gallery> 

                <CardCol>
                    <CardSorter options={{type: "video", src: '../static_assets/videos/fireplace.mp4'}} />
                    <ImageCard src={'../static_assets/pictures/pup.jpg'}/> 
                </CardCol>

                {/* Blank Card Works */}
                <ImageCaption src={'../static_assets/pictures/pup.jpg'}>Caption</ImageCaption>  

                <Card>
                    <ImageCard src={'../static_assets/pictures/pup.jpg'}/> 
                    {/* <TextCard text={'One'}/>  */}
                </Card> 

                <Card>
                    <CardSorter options={{type: "video", src: '../static_assets/videos/fireplace.mp4'}} />
                </Card> 

             </ContentPlane>
        );
    }
}