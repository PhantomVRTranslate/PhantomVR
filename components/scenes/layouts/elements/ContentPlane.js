import React from 'react';
import {
    View,
    Animated,
    asset,
    Image,
    Text,
    CylindricalPanel
} from 'react-vr'; 


class ContentPlane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startPoint: this.props.deg || -75,
            subComponentLimit: 0
        };
    }

    componentDidMount() {
        //ensures at most 5 subcomponents  
        
        let childLength = this.props.children.length >= 5 ? 5 : this.props.children.length;
        this.setState({
            subComponentLimit: childLength
        });
    }

    render() {
        console.log('this is subCLimit: ' + this.subComponentLimit);
        ///  IMPORTANT 
                //slice(0,5) only works if there are 5 or more items - remember to adjust
        ///
        // console.log(this.props.children.slice(0,5));
        return (
            <View> 
                 <CylindricalPanel
                layer={{width: 4096, height: 800}} 
                style={{
                    transform: [{rotateY: this.state.startPoint}],
                    opacity: 1
                    }}
                    >
                    <View
                        style={{
                        opacity: 1,
                        width: 2048,
                        height: 800,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        }}
                    >
                    {this.props.children.slice(0,this.subComponentLimit)}
                    </View>
                </CylindricalPanel>
            </View>
        );
    }
}

module.exports = ContentPlane; 

