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

import CardContainer from './CardContainer';


// const AnimatedModel = Animated.createAnimatedComponent(CylindricalPanel);


export default class CardCol extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards: []
        };
    }


    componentWillMount(){
        const rows = this.props.rows || 2;
        const cols = this.props.cols || Math.ceil(this.props.children.length / 2);
        this.renderCards(rows, cols); 
    }

    generateCard(child, rows, cols, i) {
        return (
            <View style={{
                width: `${95 / cols}%`,
                height: `${95 / rows}%`,
                margin: 5,
                borderWidth: 2,
                borderColor: 'black',
                }}
                key={i}>
                {child}
            </View>   
        );
      }

    renderCards(rows, cols){

        console.log(rows, cols, "rows and cols");
        let cards = [];
        for(let i = 0; i < this.props.children.length; i++){
            cards.push(this.generateCard(this.props.children[i], rows, cols, i));
        }
        this.setState({
            cards: cards
        });
        
    }

    render() {
        // let fsize = this.state.fontgaze ? 50 : 30; 
        console.log(this.state.cards.length, "hi");
        return (
            <CardContainer flex={Math.ceil(this.state.cards.length / 2)}>
                <View style={{
                    opacity: 1,
                    // flex: 1,
                    height: '100%',
                    width: '100%',
                    // minHeight: 250,
                    // maxHeight: 500,
                    // minWidth: 400,
                    // maxWidth: 400,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // margin: 5
                }}>{this.state.cards}
                </View> 
            </CardContainer>
        );
    }
}

// AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);