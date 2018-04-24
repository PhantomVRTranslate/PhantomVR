import React from 'react';
import {View, Image, VrButton} from 'react-vr';
// import ImageZoom from 'imageZoom';


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
        console.log('switched border to ' + this.state.border); 
        this.setState({border: !this.state.border});
    }
    render () {
        let border = this.state.border ? 5 : 0; 
        return (
                <VrButton onEnter={() => this.borderShow()} onExit={() => this.borderShow()} style = {{
                    width: '100%' , 
                    height: '100%',
                    minWidth: 400,
                    minHeight: 250,
                    maxHeight: 500,
                    maxWidth: 400
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
        );
    }
}