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

     store: [],
     clickEvent: this.clickEvent
    };
  }

  clickEvent(classname, i){
    theDocs.triggerEvent(classname, i); 
  }

  componentWillMount(){
    theDocs.getDocument(result => {
      this.setState({
        store: result
      },
      console.log('this is store/result: ', result)
    );

    });
  }

  testMethod() {}
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
          <VrButton onClick={() => this.clickEvent('text-vr', 0)}>
          <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>clickmeplz</Text> 
          </VrButton>
        <Dashboard content={this.state}/> 

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
