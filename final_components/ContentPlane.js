import React from "react";
import { 
    AppRegistry, 
    asset, 
    Pano, 
    Text, 
    View,
    CylindricalPanel,
} from "react-vr";

export default class ContentPlane extends React.Component {

  render() {
    console.warn('this is props.children', this.props.children);

    return (
      <CylindricalPanel
        layer={{ 
            width: 4096, 
            height: 800,
            density: 8092,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
         }}
         style={{position: 'absolute'}}
      >
      <View style={{
                width: 2048,
                height: 800,
                layoutOrigin: [-.5, 0],
                }} >
        {this.props.children}
        </View>
      </CylindricalPanel>
    );
  }
}
