import React from 'react';
import {
  AppRegistry,
  asset,
  NativeModules,
  VrButton,
  Pano,
  Text,
  View,
} from 'react-vr';

import {merge} from 'lodash';
import Dashboard from './components/scenes/Dashboard.js';

import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';
import BrowserBridge from './vr/BrowserBridge.js'; 

const browserBridge = new BrowserBridge();
BatchedBridge.registerCallableModule(BrowserBridge.name, browserBridge);

const theDocs = NativeModules.DocumentGet;

import App from './final_components/app';
import Title from './final_components/title';

import { backgroundImage } from './helperFiles/styleSheet.js';

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
     store: {},
     clickEvent: this.clickEvent,
      enterScene: false,
    };
    this.mergeState = this.mergeState.bind(this); 
  }

  clickEvent(classname, i){
    theDocs.triggerEvent(classname, i); 
  }

  mergeState(addContent, removeContent){
    let store = merge({}, this.state.store, addContent); 
    removeContent.forEach(content => {
      delete store[content];

    });

    this.setState({
      store: store
    });
  }

  componentWillMount(){
    this.unsubscribe = browserBridge.subscribe(this.mergeState); 
    theDocs.getDocument(result => {
      let mergedStore =  this.state.store + result; 
    });
  }


  activateScene() {
    this.setState({ enterScene: true });
  }

  render() {
    // return (
    //   <View>
    //     <Pano source={asset('space.jpg')}/>
    //       <VrButton onClick={() => this.testMethod()}>
    //       </VrButton>
    //     <Dashboard content={this.state.store}/>
    //     </View>
    // );


    return (
      <View>
        <Pano source={{uri: backgroundImage}}/>
        {/* <App /> */}
        <Title activateScene={this.activateScene.bind(this)} />
        { this.state.enterScene ? <App /> : <View /> }
      </View>
    );

  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);