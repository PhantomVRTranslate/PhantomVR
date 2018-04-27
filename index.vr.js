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
import TextVR from './components/scenes/layouts/elements/TextVr';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';
import BrowserBridge from './vr/BrowserBridge.js'; 
const theDocs = NativeModules.DocumentGet;

const browserBridge = new BrowserBridge();
BatchedBridge.registerCallableModule(BrowserBridge.name, browserBridge);

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
     store: {},
     clickEvent: this.clickEvent
    };
    this.mergeState = this.mergeState.bind(this); 
  }

  clickEvent(classname, i){
    theDocs.triggerEvent(classname, i); 
  }

  mergeState(addContent, removeContent){
    console.warn('this is removed Content: ', removeContent); 
    let store = merge({}, this.state.store, addContent); 
    removeContent.forEach(content => {
      console.log('this is removeC in mergeState: ', content, store); 
      delete store[content];
      console.log('this is store after delete: ', store); 

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

  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <Dashboard content={this.state}/> 
      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);