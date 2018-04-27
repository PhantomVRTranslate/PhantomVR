import React from 'react';
import {View, Image, VrButton} from 'react-vr';
// import ImageZoom from 'imageZoom';

import CardContainer from './CardContainer';


export default class ImageCard extends React.Component {
    constructor(){
        super();
        this.state = {
            border: false
        };
    }

    //need to tailor, right now its not set but if you add borderWidth: 5 & borderColor: w/e it will detect when you are hovering over an image
    //tried to work with tint color but its opacity variable changes the opacity of the entire fucking image. 

    borderShow(){
        //turned off
        this.setState({border: !this.state.border});
    }
    render () {
        //uncomment for gaze border 
        console.warn('this is props', this.props);
        // let border = this.state.border ? 5 : 0; 
        return (
            <CardContainer flex={this.props.flex || 1}>
                <VrButton onClick={() => this.props.click(this.props.passkey)} style = {{
                    width: '100%' , 
                    height: '100%',
                    minHeight: 250,
                    maxHeight: 500,
                    maxWidth: 400
                    //uncomment for border to appear on gaze
                    // minWidth: 400,
                    // borderColor: '#FFF', 
                    // borderWidth: border, 
                    }}>
                    
                    <Image 
                        source = {{uri: this.props.src}}
                        style = {{
                            width: '100%', 
                            height: '100%',
                            
                            resizeMode: 'cover'
                        }}
                        
                        />
                </VrButton>
                </CardContainer>
        );
    }
}