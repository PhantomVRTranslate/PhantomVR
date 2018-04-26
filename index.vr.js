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

import App from './NavBarWConditionalRendering/app';
import Gallery1 from './NavBarWConditionalRendering/gallery/gallery1';
import Gallery2 from './NavBarWConditionalRendering/gallery/gallery2';
import Gallery3 from './NavBarWConditionalRendering/gallery/gallery3';
import BottomNavBar from './NavBarWConditionalRendering/nav_bar/bottom_nav_bar';
import Title from './NavBarWConditionalRendering/title/title';

import { backgroundImage } from './helperFiles/styleSheet.js';

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
      enterScene: false,
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

  activateScene() {
    this.setState({ enterScene: true });
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


    // return (
    //   <View>
    //     <Pano source={{uri: backgroundImage}}/>
    //     {/* <App /> */}
    //     <Title activateScene={this.activateScene.bind(this)} />
    // { this.state.enterScene ? <App /> : <View /> }
    //   </View>
    // );

  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
