import React from 'react';
import {View, Text} from 'react-vr';
import CardSorter from './CardSorter';
 
// can be used as a "BlankCard" To TakeUp 1 unit of space in Content Plane

export default class CardContainer extends React.Component {
    render() {

        const { cardStyling } = this.props;

        const maxWidth = (this.props.flex * 400) || 800;

        const defaultCardStyling = {
            flex: this.props.flex || 1,
            backgroundColor: 'rgba(0,200,200,0.5)',  
            borderWidth: 5,
            borderColor: '#385f53',               
            minHeight: 250,
            height: '100%', 
            width: '100%',
            maxHeight: 500,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth,
            margin: 10,
            overflow: 'hidden',
        };

        const mergedCardStyling = Object.assign({}, defaultCardStyling, cardStyling);

        return (
            <View
                style = {mergedCardStyling}>
                {this.props.children}
            </View>
        );
    }
}