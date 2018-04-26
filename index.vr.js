import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

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
      enterScene: false
    };
  }

  activateScene() {
    this.setState({ enterScene: true });
  }

  render() {

    return (
      <View>
        <Pano source={{uri: backgroundImage}}/>
        <Title activateScene={this.activateScene.bind(this)} />
    { this.state.enterScene ? <App /> : <View /> }
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
