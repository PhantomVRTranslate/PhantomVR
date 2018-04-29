import React from 'react';
import {View, Image, VrButton} from 'react-vr';
// import ImageZoom from 'imageZoom';

import CardContainer from './CardContainer';


export default class ImageCard extends React.Component {
    constructor(){
        super();
    }

    render () {
        return (
            <CardContainer flex={this.props.flex || 1}>
                <VrButton onClick={() => this.props.click(this.props.passkey)} style = {{
                    width: '100%' , 
                    height: '100%',
                    minHeight: 250,
                    maxHeight: 500,
                    maxWidth: 400
                    }}>
                    
                    <Image 
                        source = {{uri: this.props.src}}
                        style = {{
                            width: '100%', 
                            height: '100%',
                        }}
                        
                        />
                </VrButton>
                </CardContainer>
        );
    }
}