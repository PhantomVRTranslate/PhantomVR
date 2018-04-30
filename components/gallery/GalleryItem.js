import React from 'react';
import {View, Text, Image, Video, VrButton} from 'react-vr';
export default class GalleryItem extends React.Component {
    constructor(){
        super();
    }

    render () {
        let content;
        const { itemStyling } = this.props;
        const defaultStyling = {
            width: '100%', 
            height: '100%',
        };
        const defaultTextStyling = {
        width: '100%', 
        height: '100%',
        fontSize: 30,
        fontWeight: "400",
        textAlign: "center",
        textAlignVertical: "center"
    };
        const mergedStyling = Object.assign({}, defaultStyling, itemStyling);
        const mergedTextStyling = Object.assign({}, defaultTextStyling, itemStyling);

<<<<<<< HEAD

=======
>>>>>>> 64698df167a8f89ebe3047fb3a6d1567ea4f8bec
        switch(this.props.type){
            case "image":
                content = (<Image 
                    source={{uri: this.props.src}}
                    style={mergedStyling}
                    />);
                break;
            case "video":
                content = (<Video 
                    source={{uri: this.props.src}}
                    style={mergedStyling}
                    />);
                break;
            case "text":
                content = (<Text 
                    style={mergedTextStyling}
                >
                    {this.props.text || this.props.children}
                    </Text>);
                break;
        }
        return (
            <View flex={this.props.flex}>  
                {content}        
            </View>
        );
    }
}