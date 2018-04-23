import React from 'react';
import {View, Video, VrButton} from 'react-vr';

export default class VideoCard extends React.Component {
    render() {
        console.log("Videocard", this.props);
        return (
            <View
                style={{
                    width: "33",
                    height: "50"
                }}
                >
                <VrButton>
                    <Video
                        source={{
                        uri: this.props.src
                    }}
                        style={{
                        width: "100",
                        height: "100"
                    }}/>
                </VrButton>
            </View>
        );
    }
}