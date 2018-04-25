// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

import DocumentGet from './documentGet.js'; 

function init(bundle, parent, options) {

  const browserInfo = new DocumentGet(); 

  
  const vr = new VRInstance(bundle, 'WelcomeToVR', parent, {
    
    nativeModules: [browserInfo],
    ...options,
  });

  browserInfo._setRNContext(vr.rootView.context);

  vr.render = function() {
    // console.log(window.document);
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  
  vr.start();
  return vr;
}

window.ReactVR = {init};
