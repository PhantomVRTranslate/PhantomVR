import React from 'react';
import {View, Image, VrButton, Text} from 'react-vr';
import TextCard from "./TextCard.js";

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
        this.setState({border: !this.state.border});
    }
    render () {
        let border = this.state.border ? 1 : 0; 
        return (
            <View style={{
                opacity: 1,
                flex: 1,
                height: '100%',
                width: '100%',
                minHeight: 250,
                maxHeight: 600,
                minWidth: 400,
                maxWidth: 400,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 1,
                marginTop: 50
            }}>
             <VrButton onEnter={() => this.borderShow()} onExit={() => this.borderShow()} style = {{
                    width: '100%' , 
                    height: '100%',
                    flex: 1,
                    minWidth: 400,
                    minHeight: 500,
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
                <VrButton style = {{
                    width: '100%' , 
                    height: '100%',
                    flex: 1,
                    minWidth: 400,
                    minHeight: 100,
                    maxHeight: 100,
                    maxWidth: 400,
                    backgroundColor: 'rgba(0,0,0,0)',
                    marginTop: -50,
                    opacity: border
                    }}>
                    <Text style={{
                        flex: 1, 
                        minWidth: '100%', 
                        minHeight: '100%',
                        fontSize: 45,
                        color: '#FFF',
                        fontWeight: '500',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        }}>
                        {this.props.text || this.props.children}
                    </Text>  
                </VrButton>          
                
            </View> 
               
        );
    }
}