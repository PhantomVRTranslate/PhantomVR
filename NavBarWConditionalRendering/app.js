import React from "react";
import { 
    AppRegistry, 
    asset, 
    Pano, 
    Text, 
    View,
    CylindricalPanel,
} from "react-vr";

import ContentPlane from './ContentPlane';
import Gallery1 from './gallery/gallery1';
import Gallery2 from './gallery/gallery2';
import Gallery3 from './gallery/gallery3';
import BottomNavBar from './nav_bar/bottom_nav_bar';
import Title from './title/title';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      gallery: <Gallery1/>
    };

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
    const content = [
      {label: 'Home', link: 'gallery1'},
      {label: 'About', link: 'gallery2'},
      {label: 'Gallery', link: 'gallery3'}
    ];

    return (
      <View>
      <ContentPlane>
        {this.state.gallery}
       </ContentPlane>

        <BottomNavBar 
          content={content}
          changeGallery={this.changeGallery.bind(this)}
          gallery={this.state.gallery}
          />
      </View>
    );
  }
}
