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

import { merge } from "lodash";
import Dashboard from "./components/scenes/Dashboard.js";

import BatchedBridge from "react-native/Libraries/BatchedBridge/BatchedBridge";
import BrowserBridge from "./vr/BrowserBridge.js";
import PageConstructor from "./final_components/PageConstructor.js";

const browserBridge = new BrowserBridge();
BatchedBridge.registerCallableModule(BrowserBridge.name, browserBridge);

const theDocs = NativeModules.DocumentGet;

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
        {/* <App /> */}
        <Title activateScene={this.activateScene} />
        { this.state.enterScene ? <App /> : <View /> }
      </View>
    );

  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
