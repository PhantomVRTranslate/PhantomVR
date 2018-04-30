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

import BatchedBridge from "react-native/Libraries/BatchedBridge/BatchedBridge";
import BrowserBridge from "./vr/BrowserBridge.js";
import PageConstructor from "./components/PageConstructor.js";

const browserBridge = new BrowserBridge();
BatchedBridge.registerCallableModule(BrowserBridge.name, browserBridge);

const theDocs = NativeModules.DocumentGet;

import App from "./components/app";
import Title from "./components/title";
import ContentPlane from "./components/ContentPlane.js";
import { backgroundImage } from "./helperFiles/styleSheet.js";
import NavBar from "./components/navbar/Navbar.js";

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
    let theContent = Object.values(this.state.store) || [];
    let navLinks = [];
    theContent.forEach(content => {
      if (content.type === "navlink-vr") {
        navLinks.push({ label: content.navTitle, link: content.key});
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

        <Pano source = {{uri: "https://rawgit.com/PhantomVRTranslate/PhantomVR/master/static_assets/space.jpg"}}/>
        <Title title={this.state.store.title} activateScene={this.activateScene} />
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
          changePage={this.state.clickEvent}
          page={{ type: { name: "hello" } }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);