import React from 'react';
import {View, Text} from 'react-vr';
import CardSorter from './CardSorter';
import TextVr from './TextVr.js'; 

export default class MainMenuContainer extends React.Component {
    constructor(){
        super();
        this.state={
            cards: ""
        };
        
    }

    componentWillMount(){
        //if they give two props (row, column) will adjust row column
        this.renderCards(this.props.row || 2, this.props.col || 3); 
    }

    generateCard(child, row, col) {
        return (
          <View style={{width: `${99 / this.props.children.length * row}%`,
                        height: `${99 / this.props.children.length * col}%`,
                        margin: 1}}>
              {child}
          </View>   
        );
      }

    renderCards(row, col){
        let cards = [];
        for(let i = 0; i < this.props.children.length; i++){
            cards.push(this.generateCard(this.props.children[i], row, col));
        }
        this.setState({
            cards: cards
        });
        
    }

    render() {
        
        console.log('made gallery');
        // let toRender = [
        //     {type: "text", text: "helloas;lkfjsdl;kajflsak;djfls;dkajfl;sdkajfl;ksdajfls;adkjfsalk;jfsdal;kjsdlafj"},
        //     {type: "image", src: '../static_assets/pictures/puppy.jpeg'},
        //     {type: "video", src: '../static_assets/videos/fireplace.mp4'},
        //     {type: "video", src: '../static_assets/videos/fireplace.mp4'},
        //     {type: "text", text: "helloas;lkfjsdl;kajflsak;djfls;dkajfl;sdkajfl;ksdajfls;adkjfsalk;jfsdal;kjsdlafj"},
        //     {type: "image", src: '../static_assets/pictures/puppy.jpeg'},
        // ];
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
                
                {/* {toRender.map((toCard, ind) => <CardSorter key={ind} options={toCard}/>)} */}
            </View>
        );
    }
}