import React from 'react';
import {View, Image, VrButton, Text} from 'react-vr';
import TextCard from "./TextCard.js";

import CardContainer from './CardContainer';

// import ImageZoom from 'imageZoom';


export default class ImageCaption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayCaption: this.props.alwaysShow || false,
        };
<<<<<<< HEAD

=======
>>>>>>> 64698df167a8f89ebe3047fb3a6d1567ea4f8bec
        
    }

    //need to tailor, right now its not set but if you add borderWidth: 5 & borderColor: w/e it will detect when you are hovering over an image
    //tried to work with tint color but its opacity variable changes the opacity of the entire fucking image. 

    
    toggleCaption(){
        this.setState({displayCaption: !this.state.displayCaption});
    }

    render () {

        let displayCaption;
        if (!this.props.alwaysShow) {
        displayCaption = this.state.displayCaption ? 1 : 0;
        } else {
            displayCaption = 1;
        }
<<<<<<< HEAD

        const toggleHandler = this.props.alwaysShow ? () => {} : this.toggleCaption.bind(this);

=======
        const toggleHandler = this.props.alwaysShow ? () => {} : this.toggleCaption.bind(this);        
>>>>>>> 64698df167a8f89ebe3047fb3a6d1567ea4f8bec

        return (
            <CardContainer flex={this.props.flex}>
             <VrButton 
             onEnter={toggleHandler} onExit={toggleHandler} 
             style = {{
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
                    opacity: displayCaption,
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
                        {this.props.caption || this.props.children}
                    </Text>  
                </VrButton>          
            </VrButton>
            </CardContainer>
               
        );
    }
}