import React from 'react';
import {View, Text, Image, Video, VrButton} from 'react-vr';
export default class GalleryItem extends React.Component {
    constructor(){
        super();

    }

    render () {
        let content;
        const style = {
            width: '100%', 
            height: '100%',
        };

        switch(this.props.type){
            case "image":
                content = (<Image 
                    source={{uri: this.props.src}}
                    style={style}
                    />);
                break;
            case "video":
                content = (<Video 
                    source={{uri: this.props.src}}
                    style={style}
                    />);
                break;
            case "text":
                content = (<Text 
                    style={{
                        width: "100%",
                        height: "100%",
                        fontSize: 30,
                        fontWeight: "400",
                        textAlign: "center",
                        textAlignVertical: "center"
                      }}
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