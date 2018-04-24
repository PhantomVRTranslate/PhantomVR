import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import { Match, Route, MemoryRouter as Router } from 'react-router';

import App from './app';
import Gallery1 from './gallery/gallery1';
import Gallery2 from './gallery/gallery2';
import Gallery3 from './gallery/gallery3';
import BottomNavBar from './NavBar/BottomNavBar';

export default class ReactVrApp extends React.Component {
  constructor() {
    super();
    this.state = {
      gallery: <Gallery1/>
    }

    this.changeGallery = this.changeGallery.bind(this);
  }

  changeGallery(galleryId) {
    let gallery;
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
    content = [
      {label: 'Home', link: 'gallery1'},
      {label: 'About', link: 'gallery2'},
      {label: 'Gallery', link: 'gallery3'}
    ];

    return (
      <View>
        <Pano source={asset('space.jpg')}/>
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

AppRegistry.registerComponent('ReactVrApp', () => ReactVrApp);
