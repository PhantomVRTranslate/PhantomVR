import React, { Component } from 'react';
import {
  asset,
  Animated,
  Pano,
  Text,
  View,
  Image,
  CylindricalPanel
} from 'react-vr';


// const AnimatedModel = Animated.createAnimatedComponent(CylindricalPanel);


export default class CardCol extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards: []
        };
    }


    componentWillMount(){
        //if they give two props (row, column) will adjust row column
        this.renderCards(this.props.row || 2, this.props.col || 1); 
    }

    generateCard(child, row, col, i) {
        return (
            <View style={{width: `${99 / this.props.children.length * row}%`,
                        height: `${99 / this.props.children.length * col}%`,
                        margin: 1}}
                key={i}>
                {child}
            </View>   
        );
      }

    renderCards(row, col){
        let cards = [];
        for(let i = 0; i < this.props.children.length; i++){
            cards.push(this.generateCard(this.props.children[i], row, col, i));
        }
        this.setState({
            cards: cards
        });
        
    }

    render() {
        // let fsize = this.state.fontgaze ? 50 : 30; 
        return (
            <View style={{
                opacity: 1,
                flex: 1,
                height: '100%',
                width: '100%',
                minHeight: 250,
                maxHeight: 500,
                minWidth: 400,
                maxWidth: 400,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 1
            }}>{this.state.cards}
            </View> 
        );
    }
}

// AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);