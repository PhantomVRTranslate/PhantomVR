import React from 'react';
import {View, Text} from 'react-vr';
import CardSorter from '../cards/CardSorter';

export default class MainMenuContainer extends React.Component {
    constructor(){
        super();
        this.state={
            cards: ""
        };
        
    }

    componentWillReceiveProps(newProps) {
        //if they give two props (row, column) will adjust row column
        this.renderCards(newProps, newProps.row || 2, newProps.col || 3); 
    }

    componentWillMount(){
        //if they give two props (row, column) will adjust row column
        this.renderCards(this.props, this.props.row || 2, this.props.col || 3); 
    }

    renderCards(props,row, col){
        let cards = [];
        for(let i = 0; i < props.children.length; i++){
            cards.push(this.generateCard(props.children[i], row, col, i));
        }
        this.setState({
            cards: cards
        });
        
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


    render() {
        return (
            <View
                style = {{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    flex: 1,
                    backgroundColor: 'rgba(0,200,200,0.5)',
                    
                    //combo of height && max height to ensure one component doesn't take up the whole 180º
                    
                    minHeight: 500,
                    maxHeight: 500,
                    minWidth: 800,
                    maxWidth: 800,
                }} >
                  {this.state.cards} 
            </View>
        );
    }
}