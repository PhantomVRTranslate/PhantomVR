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
            subComponentLimit: 0,
        };
        this.subComponents = [];
    }

    componentDidMount() {
        //ensures at most 5 subcomponents  
        console.log('this');
        console.log(this.props.children.length === undefined);
        console.log(this.props.children);


        if (this.props.children.length === undefined){ 
            this.setState({
                subComponentLimit: 1
            });
            this.subComponents.push(this.props.children);
        } else {
            let childLength = this.props.children.length >= 5 ? 5 : this.props.children.length;
            
            this.setState({
                subComponentLimit: childLength
            });
            let sComps = []; 
            for (let i = 0; i < childLength; i++){
                sComps.push(this.props.children[i]);
            }
            this.subComponents = sComps;
        }
    }

    render() {
        // console.log('this is subCLimit: ' + this.subComponentLimit);

        return (
            <View> 
                 <CylindricalPanel
                    layer={{width: 4096, height: 800, density: 8092}} 
                    style={{
                    // transform: [{rotateY: this.state.startPoint}],
                    opacity: 1
                    }}
                    >
                    <View style={{layoutOrigin: [-.5, 0]}}>
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
                        {this.subComponents}
                        </View>
                    </View> 
                </CylindricalPanel>
            </View>
        );
    }
}

module.exports = ContentPlane; 

