import React from 'react';
import {View, Text} from 'react-vr';
import CardSorter from './CardSorter';
import TextVr from './TextVr.js'; 
 
// can be used as a "BlankCard" To TakeUp 1 unit of space in Content Plane

export default class Card extends React.Component {
    render() {
        return (
            <View
                style = {{
                    flex: 1,
                    backgroundColor: 'rgba(0,200,200,0.5)',
                    
                    //combo of height && max height to ensure one component doesn't take up the whole 180º
                    minHeight: 250,
                    height: '100%', 
                    width: '100%',
                    maxHeight: 500,
                    minWidth: 400,
                    maxWidth: 400,

                }} >
                {this.props.children}
            </View>
        );
    }
}