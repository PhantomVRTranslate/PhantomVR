import React from 'react';
import {View, Image, VrButton} from 'react-vr';
// import ImageZoom from 'imageZoom';


export default class GalleryItem extends React.Component {
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

        // let border = this.state.border ? 5 : 0; 
        return (
            <View flex={this.props.flex}>          
                    <Image 
                        source = {{uri: this.props.src}}
                        style = {{
                            width: '100%', 
                            height: '100%',
                        }}
                        
                        />
            </View>
        );
    }
}