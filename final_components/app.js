import React from "react";
import { 
    AppRegistry, 
    asset, 
    Pano, 
    Text, 
    View,
    CylindricalPanel,
} from "react-vr";

// Import your custom pages here
import Gallery1 from './gallery/gallery1';
import Gallery2 from './gallery/gallery2';
import Gallery3 from './gallery/gallery3';

import ContentPlane from './ContentPlane';
import NavBar from './navbar/Navbar';

import { navbarContent } from '../helperFiles/content';

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
    return (
      <View>
      <ContentPlane>
        {this.state.gallery}
       </ContentPlane>

        <NavBar 
          content={navbarContent}
          changeGallery={this.changeGallery.bind(this)}
          gallery={this.state.gallery}
          />
      </View>
    );
  }
}
