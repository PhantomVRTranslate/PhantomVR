import React, { Component } from 'react';
import {
  asset,
  Animated,
  Text,
  Image,
  VrButton
} from 'react-vr';

export default class TextVr extends React.Component {
    constructor(props){
    super(props);
        this.state = {
            text: [],
            textPart: 0
        };
    }
    render() {
        return (
            <VrButton >
                <Text
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,200,200,0.5)',
                        color: '#FFF',
                        fontSize: 50,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        overflow: 'scroll',
                        //combo of height && max height to ensure one component doesn't take up the whole 180º
                        height: '100%',
                        maxHeight: 500,
                        width: '100%',
                        maxWidth: 800,
                        margin: 1
                    }}>
                    {this.props.text || this.props.children}  
                </Text>  
            </VrButton>
        );
    }
}