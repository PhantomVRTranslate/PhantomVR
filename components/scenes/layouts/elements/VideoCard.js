import React from 'react';
import {View, Video, VrButton} from 'react-vr';

export default class VideoCard extends React.Component {
    render() {
        console.log("Videocard", this.props);
        return (
                <VrButton style = {{
                    width: '100%', 
                    height: '100%',
                    }}>
                    <Video
                        source={{
                        uri: this.props.src
                    }}
                        style={{
                        
                        width: "100%",
                        height: "100%"
                    }}/>
                </VrButton>
        );
    }
}