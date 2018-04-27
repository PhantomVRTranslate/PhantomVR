import React from 'react';
import {
    View,
    Animated,
    asset,
    Image,
    Text,
    CylindricalPanel
} from 'react-vr'; 


export default class ContentPlane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            subComponentLimit: 0,
        };
        this.subComponents = [];

        this.propsToState = this.propsToState.bind(this);
    }

    componentWillReceiveProps(newProps){
        this.propsToState(newProps);
    }

    componentDidMount() {
        this.propsToState(this.props);

    }

    propsToState(props) {
        //ensures at most 5 subcomponents  

        if (props.children.length === undefined){ 
            this.setState({
                subComponentLimit: 1
            });
            this.subComponents.push(props.children);
        } else {
            let childLength = props.children.length >= 5 ? 5 : props.children.length;
            
            this.setState({
                subComponentLimit: childLength
            });
            let sComps = []; 
            for (let i = 0; i < childLength; i++){
                sComps.push(props.children[i]);
            }
            this.subComponents = sComps;
        }
    }

    render() {
        return (
            <View> 
                 <CylindricalPanel
                    layer={{width: 4096, height: 800, density: 8092}} 
                    style={{
                    opacity: 1
                    }}
                    >
                    <View style={{layoutOrigin: [-.5, 0]}}>
                        <View
                            style={{
                            opacity: 1,
                            width: 2048,
                            height: 1000,
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