import React from 'react';
import {View, Text} from 'react-vr';
import CardSorter from './CardSorter';
import TextVr from './TextVr.js'; 

export default class Card extends React.Component {
    constructor(){
        super();
        this.state={
        
        };
        
    }



    render() {
        
        console.log('single card'); 
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