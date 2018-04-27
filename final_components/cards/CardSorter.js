import React from 'react';
import ImageCard from './ImageCard';
import TextCard from './TextCard';
import VideoCard from './VideoCard';


export default class CardSorter extends React.Component {
    render() {
        debugger;
        console.log('hi');
        switch(this.props.options.type){
            case "image":
                return (<ImageCard src={this.props.options.src}/>);
            case "video":
                return (<VideoCard src={this.props.options.src}/>);
            case "text":
                return (<TextCard text={this.props.options.text}/>);
            default: 
                return ('');
        }
    }
}