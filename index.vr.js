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

import Dashboard from './components/scenes/Dashboard.js';
import TextVR from './components/scenes/layouts/elements/TextVr';
const theDocs = NativeModules.DocumentGet;

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {

     store: []
    };
  }

  componentWillMount(){
    theDocs.getDocument(result => {
      this.setState({
        store: result
      });
    });
  }

  testMethod() {}
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
          <VrButton onClick={() => this.testMethod()}>
          </VrButton>
        <Dashboard content={this.state.store}/>

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
