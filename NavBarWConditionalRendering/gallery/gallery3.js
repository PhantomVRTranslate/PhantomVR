import React from 'react';
import {
    View,
    Animated,
    asset,
    Image,
    Text
} from 'react-vr'; 
import { Easing } from 'react-native'; 

import VRText from './vr_text.js'; 

export default class Gallery3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
                <VRText>GOOD</VRText>
                <VRText>NIGHT</VRText>
                <VRText>ALL</VRText>
                <VRText>OF</VRText>
                <VRText>MY</VRText>
                <VRText>EARTHLINGS</VRText>
            </View>
        );
    }
}



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