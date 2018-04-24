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
import TitleVr from './elements/TitleVr.js'; 
import TextVr from './elements/TextVr.js'; 
import ContentPlane from './elements/ContentPlane'; 
import CPcolumn from './elements/CPcolumn';
import Gallery from "./elements/Gallery";
import CardSorter from "./elements/CardSorter";
import TextCard from "./elements/TextCard.js"; 
import Card from "./elements/Card.js"; 

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
                            <CardSorter options={{type: "image", src: '../static_assets/pictures/puppy.jpeg'}} />
                            <TextCard text={'FOur'}></TextCard>
                        </Gallery> 
                        <Card>
                            <TextCard text={'One'}/> 
                        </Card> 
                        <Card>
                            <CardSorter options={{type: "video", src: '../static_assets/videos/fireplace.mp4'}} />
                        </Card> 
                        <Card>
                            <CardSorter options={{type: "image", src: '../static_assets/pictures/puppy.jpeg'}} />
                        </Card> 

             </ContentPlane>
        );
    }
}