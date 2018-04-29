import React from "react";
import {
  AppRegistry,
  asset,
  NativeModules,
  VrButton,
  Pano,
  Text,
  View
} from "react-vr";

import App from "./final_components/app";
import Title from "./final_components/title";
import ContentPlane from "./final_components/ContentPlane.js";
import { backgroundImage } from "./helperFiles/styleSheet.js";
import Navbar from "./final_components/navbar/Navbar.js";

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    
    this.state = {
      enterScene: false,
    };

    this.activateScene = this.activateScene.bind(this);
  }

  activateScene() {
    this.setState({ enterScene: true });
  }

  render() {
    return (
      <View>
        {/* <Pano source={{uri: 'https://c1.staticflickr.com/1/819/26673769157_b83ac4a9f6_o.jpg'}}/> // forest */}
        {/* <Pano source={{uri: 'https://c1.staticflickr.com/1/818/27568453618_37132d75e8_o.jpg'}}/> // beach */}
        {/* <Pano source={{uri: 'https://c1.staticflickr.com/1/577/20214930404_d30c781c47_o.jpg'}}/> // fractal */}
        {/* <Pano source={{uri: 'https://c2.staticflickr.com/8/7720/17491232401_4fee3698ff_o.jpg'}}/> // snow */}
        {/* <Pano source={{uri: 'https://c1.staticflickr.com/1/192/500978642_93d4446af7_o.jpg'}}/> // inari */}
        <Title
          title='PhantomVR' 
          activateScene={this.activateScene} />
        { this.state.enterScene ? <App /> : <View /> }
      </View>
    );

  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
