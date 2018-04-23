import React from 'react';
import {View, Text} from 'react-vr';
import CardSorter from './CardSorter';

export default class MainMenuContainer extends React.Component {
    render() {
        let toRender = [
            {type: "text", text: "helloas;lkfjsdl;kajflsak;djfls;dkajfl;sdkajfl;ksdajfls;adkjfsalk;jfsdal;kjsdlafj"},
            {type: "image", src: '../static_assets/pictures/puppy.jpeg'},
            {type: "video", src: '../static_assets/videos/fireplace.mp4'},
            {type: "video", src: '../static_assets/videos/fireplace.mp4'},
            {type: "text", text: "helloas;lkfjsdl;kajflsak;djfls;dkajfl;sdkajfl;ksdajfls;adkjfsalk;jfsdal;kjsdlafj"},
            {type: "image", src: '../static_assets/pictures/puppy.jpeg'},
        ];
        return (
            <View
                style = {{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    flex: 1,
                    backgroundColor: 'rgba(0,200,200,0.5)',

                    //combo of height && max height to ensure one component doesn't take up the whole 180º
                    height: '100%',
                    maxHeight: 500,
                    width: '100%',
                    maxWidth: 800,
                    margin: 10
                }} >
                {toRender.map((toCard, ind) => <CardSorter key={ind} options={toCard}/>)}
            </View>
        );
    }
}