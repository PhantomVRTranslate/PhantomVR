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
                            maxWidth: 800,
                            maxHeight: 500,
                            fontSize: 50,
                            fontWeight: '400',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            margin: 1
                    }}
                   >
                    {this.props.src || this.props.text || this.props.children}
                    </Text>
   
        );
    }
}