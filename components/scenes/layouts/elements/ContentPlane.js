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



{/* <View style={{
    opacity: 1,
    width: 4096,
    height: 800,
    margin: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    }}
> */}
// </View> 


    // updateStage(input) {
    //     if(this.state.showButton === false) {
    //       this.setState({showButton: true});
    //     }
    //   switch (input) {
    //       case 1:
    //         this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0]});
    //         break;
    //       case 2:
    //         this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0]});
    //         break;
    //       case 3:
    //         this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0]});
    //         break;
    //       case 4:
    //         this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0]});
    //         break;
    //       case 5:
    //         this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0]});
    //         break;
    //       case 6:
    //         this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05]});
    //         break;
    //     }
    //   }

    // updateScene() {
    //     this.setState({color1: "#D8DAF1", color2: "#A482DF", text: "Watch Video"});
    // }