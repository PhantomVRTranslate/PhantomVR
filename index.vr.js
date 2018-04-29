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
        <Pano source={{uri: backgroundImage}}/>
        <Title 
          title='PhantomVR' 
          activateScene={this.activateScene} />
        { this.state.enterScene ? <App /> : <View /> }
      </View>
    );

  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
