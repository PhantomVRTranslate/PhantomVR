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
import NavBar from "./final_components/navbar/Navbar.js";

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
      enterScene: false,
      store: {},
      clickEvent: this.clickEvent.bind(this)
    };
    this.mergeState = this.mergeState.bind(this);
    this.activateScene = this.activateScene.bind(this);
  }

  clickEvent(classname, i) {
    theDocs.triggerEvent(classname, i);
  }

  mergeState(addContent, removeContent) {
    let store = merge({}, this.state.store, addContent);
    removeContent.forEach(content => {
      delete store[content];
    });

    this.setState({
      store: store
    });
  }

  componentWillMount() {
    this.unsubscribe = browserBridge.subscribe(this.mergeState);
    this.setState({ enterScene: false });
    theDocs.getDocument(result => {
      let mergedStore = this.state.store + result;
    });
  }

  makeNavLinks() {
    let theContent = Object.values(this.state.store);
    let navLinks = [];
    theContent.forEach(content => {
      if (content.type === "navlink-vr") {
        navLinks.push({ label: content.navTitle, link: content.key });
      }
    });
    return navLinks;
  }

  activateScene() {
    this.setState({ enterScene: true });
  }

  render() {
    let navbarContent = this.makeNavLinks();
    return (
      <View>
        <Pano source={asset("space.jpg")} />
        <Title activateScene={this.activateScene} />
        {this.state.enterScene ? (
          <ContentPlane>
            <PageConstructor
              store={this.state.store}
              clickEvent={this.state.clickEvent}
            />
          </ContentPlane>
        ) : (
          <View />
        )}
        <NavBar
          content={navbarContent}
          changeGallery={this.state.clickEvent}
          gallery={{ type: { name: "hello" } }}
        />
      </View>
    );

    // return (
    //   <View>
    //     <Pano source={{uri: backgroundImage}}/>
    //     {/* <App /> */}
    //     <Title activateScene={this.activateScene} />
    //     { this.state.enterScene ? <App /> : <View /> }
    //   </View>
    // );

    // }
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
