import React from 'react';
import {
    View,
    Animated,
    asset,
    Image,
    Text,
    CylindricalPanel
} from 'react-vr'; 
import {Easing} from 'react-native'; 
import TitleVr from './elements/TitleVr.js'; 
import TextVr from './elements/TextVr.js'; 
import ContentPlane from './elements/ContentPlane'; 
import CPcolumn from './elements/CPcolumn';

export default class DashboardLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }


//ContentPlane is the CylinderPanel that has the row flexbox

//CPC

    render() {

        return (
            <ContentPlane > 
                <CPcolumn>
                        <TextVr>ONE</TextVr>
                        <TextVr>TWO</TextVr>
                </CPcolumn>
                        <TextVr>THREE</TextVr>
                        <TextVr>Four</TextVr>
                        <TextVr>Five</TextVr>
                        <TextVr>Six</TextVr>

             </ContentPlane>
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