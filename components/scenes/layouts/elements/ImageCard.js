import React from 'react';
import {View, Image, VrButton} from 'react-vr';
// import ImageZoom from 'imageZoom';


export default class ImageCard extends React.Component {
    render () {
        console.log("imagecard", this.props);
        return (
            <View
            style={{
                width: "33",
                height:"50"
            }}
            > 
                <VrButton>
                    <Image 
                        source = {{uri: this.props.src}}
                        style = {{width: '100', 
                            height: '100',
                            resizeMode: 'cover'
                            }}/>
                </VrButton>
            </View>
        );
    }
}