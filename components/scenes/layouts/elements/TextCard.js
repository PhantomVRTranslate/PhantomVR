import React from 'react';
import {View, Text, VrButton} from 'react-vr';

export default class ImageCard extends React.Component {
    render() {
        console.log("imagecard", this.props);
        return (
            <View
                style = {{
                    width: "33",
                    height:"50"
                }} >
                <VrButton>
                    <Text
                        style={{
                            width: "100",
                            height: "100",
                            fontSize: 50,
                            fontWeight: '400',
                            textAlignVertical: 'top',
                    }}
                    numberOfLines={2}
                    ellipsizeMode={"tail"}>{
                        this.props.text}
                    </Text>
                </VrButton>
            </View>
        );
    }
}