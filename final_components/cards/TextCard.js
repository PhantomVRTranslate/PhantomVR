import React from 'react';
import {View, Text, VrButton} from 'react-vr';

import CardContainer from './CardContainer';

export default class TextCard extends React.Component {
    render() {
        return (
<CardContainer flex={this.props.flex}>
                    <Text
                        style={{
                            width: "100%",
                            height: "100",
                            maxHeight: 500,
                            lineHeight: 80,
                            fontSize: 40,
                            fontWeight: '400',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                    }}
                   >
                    {this.props.src || this.props.text || this.props.children}
                    </Text>
                    </CardContainer>

        );
    }
}
