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

import { backgroundImage } from './helperFiles/styleSheet.js';

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
      gallery: <Gallery1/>
    }

    this.changeGallery = this.changeGallery.bind(this);
  }

  changeGallery(galleryId) {
    let gallery;

    // TODO: extract from navbarContent in content.js
    switch(galleryId) {
      case 'gallery1':
        gallery = <Gallery1/>;
        break;
      case 'gallery2':
        gallery = <Gallery2/>;
        break;
      case 'gallery3':
        gallery = <Gallery3/>;
        break;
    }

    this.setState({gallery});
  }

  render() {
    // TODO: put in content.js
    content = [
      {label: 'Home', link: 'gallery1'},
      {label: 'About', link: 'gallery2'},
      {label: 'Gallery', link: 'gallery3'}
    ];

    return (
      <View>
        <Pano source={{uri: backgroundImage}}/>
        <App>
        {this.state.gallery}
        </App>
        <BottomNavBar
          content={content}
          changeGallery={this.changeGallery.bind(this)}
          gallery={this.state.gallery}
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
