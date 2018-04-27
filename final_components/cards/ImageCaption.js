import React from 'react';
import {View, Image, VrButton, Text} from 'react-vr';
import TextCard from "./TextCard.js";

import CardContainer from './CardContainer';

// import ImageZoom from 'imageZoom';


export default class ImageCaption extends React.Component {
    constructor(){
        super();
        this.state = {
            border: false,
        };
    }

    //need to tailor, right now its not set but if you add borderWidth: 5 & borderColor: w/e it will detect when you are hovering over an image
    //tried to work with tint color but its opacity variable changes the opacity of the entire fucking image. 

    
    borderShow(){
        console.log('switched border to ' + this.state.border); 
        this.setState({border: !this.state.border});
    }
    render () {
        let border = this.state.border ? 1 : 0; 
        return (
            <CardContainer flex={this.props.flex}>
             <VrButton onEnter={() => this.borderShow()} onExit={() => this.borderShow()} style = {{
                    width: '100%' , 
                    height: '100%',
                    }}>
                    
                    <Image 
                        source = {{uri: this.props.src}}
                        style = {{
                            width: '100%', 
                            height: '100%',
                        }}
                        
                        />
                <VrButton style = {{
                    width: '100%' , 
                    height: '100%',
                    flex: 1,
                    opacity: border,
                    alignItems: 'center'
                    }}>
                    <Text style={{
                        flex: 1, 
                        minWidth: '100%', 
                        minHeight: '100%',
                        fontSize: 50,
                        color: '#FFF',
                        fontWeight: '500',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        padding: '10',
                        }}>
                        {this.props.text || this.props.children}
                    </Text>  
                </VrButton>          
            </VrButton>
            </CardContainer>
               
        );
    }
}