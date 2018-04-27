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
import lodash from 'lodash';

const theDocs = NativeModules.DocumentGet;

class BrowserBridge {
    constructor() {
        this._subscribers = {};
    }

    subscribe(handler) {
        const key = String(Math.random());
        this._subscribers[key] = handler;
        return () => {
            delete this._subscribers[key];
        };
    }

    notifyEvent(name, event) {
      console.log('name and : ', name);
      console.log(' event: ', event);

        lodash.forEach(this._subscribers, handler => {
            handler(name, event);
        });
    }
}

const browserBridge = new BrowserBridge();
BatchedBridge.registerCallableModule(BrowserBridge.name, browserBridge);

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
    
     store: {},
     clickEvent: this.clickEvent
    };

    this.dummy = this.dummy.bind(this); 
  }

  clickEvent(classname, i){
    theDocs.triggerEvent(classname, i); 
  }

  acceptNewElements(elements){ 
    console.log('acceptNewElements: ', elements); 
    // theDocs.domListener();
    
    // elementsList => {
    //   this.setState(merge({}, this.state, {store: elemenstList}));
    // }
  }

  dummy(name, event){
    console.log('this is dummy input: ', name, event); 
    let store = lodash.merge({}, this.state.store, event); 
    this.setState({
      store: store
    });
  }

  componentWillMount(){

    this.unsubscribe = browserBridge.subscribe(this.dummy); 
    console.log('unsubscribe in will mount: ', this.unsubscribe); 
    theDocs.getDocument(result => {
      let mergedStore =  this.state.store + result; 
      console.log('mergedstore, ',mergedStore); 

    });
    console.log('this is acceptNewElements: ', this.acceptNewElements);
    // theDocs.domListener(result => {
      
    //   console.warn('this is AFTER result: ', result);
  

    // });
  }

  testMethod() {}
  render() {
    console.warn('this is the state::', this.state); 
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
         
        <Dashboard content={this.state}/> 

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);


{/* <VrButton onClick={() => this.clickEvent('text-vr', 0)}>
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
</VrButton> */}