import React from 'react';
import {View, Text, VrButton} from 'react-vr';

export default class TextCard extends React.Component {
    render() {
        return (

                    <Text
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,200,200,0.5)',
                            width: "100%",
                            height: "100",
                            maxWidth: 400,
                            maxHeight: 500,
                            lineHeight: 80,
                            fontSize: 40,
                            fontWeight: '400',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            margin: 5,
                    }}
                   >
                    {this.props.src || this.props.text || this.props.children}
                    </Text>

        );
    }
}
