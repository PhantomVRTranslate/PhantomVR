import React from 'react';
import {
  AppRegistry,
  NativeModules,
  asset,
<<<<<<< HEAD
=======
  NativeModules, 
>>>>>>> 6089eb48f7ee28e7e3fe01710736a23137bdf843
  VrButton,
  Pano,
  Text,
  View,
} from 'react-vr';
import Dashboard from './components/scenes/Dashboard.js';

const theDocs = NativeModules.DocumentGet;

<<<<<<< HEAD

=======
import Dashboard from './components/scenes/Dashboard.js';
import TextVR from './components/scenes/layouts/elements/TextVr';
const theDocs = NativeModules.DocumentGet;
>>>>>>> 6089eb48f7ee28e7e3fe01710736a23137bdf843

export default class WelcomeToVR extends React.Component {
  constructor(){
    super();
    this.state = {
<<<<<<< HEAD
     heaven: 'hello'
    };
  }

  componentWillMount(){
  
    console.log('WTF');
    console.log('checking state', this.state.heaven); 
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
    console.log(solution);
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <VrButton onClick={() => this.testMethod()}>
        </VrButton>
        <Dashboard/> 
=======

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

>>>>>>> 6089eb48f7ee28e7e3fe01710736a23137bdf843
      </View>
    );
  }

}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
