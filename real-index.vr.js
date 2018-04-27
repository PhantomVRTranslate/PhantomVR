import React from 'react';
import {
  AppRegistry,
  NativeModules,
  asset,
  VrButton,
  Pano,
  Text,
  View,
} from 'react-vr';
import Dashboard from './components/scenes/Dashboard.js';

const theDocs = NativeModules.DocumentGet;



export default class WelcomeToVR extends React.Component {
  constructor(){
    super();
    this.state = {
     heaven: 'hello'
    };
  }

  componentWillMount(){

    theDocs.getDocument(result => {
      this.setState({
        heaven: result
      });
    });
  }

  testMethod() {

    //this sets the state to have whatever we pass in from the DOM




  }
  render() {


    let solution = this.state.heaven;
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <VrButton onClick={() => this.testMethod()}>
        </VrButton>
        <Dashboard/>
      </View>
    );
  }

}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
