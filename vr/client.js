// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

const GearVRRaycaster = {
  getType: () => "Gear VR",
  getRayOrigin: () => [0, 0, 0],
  getRayDirection: () => [0, 0, -1],
  drawsCursor: () => true
};

import DocumentGet from './documentGet.js'; 

function init(bundle, parent, options) {
  let vr;
  let { mobile } = options;
  const browserInfo = new DocumentGet(); 

  vr = mobile
    ? new VRInstance(bundle, "WelcomeToVR", parent, {
        nativeModules: [browserInfo], 
        raycasters: [GearVRRaycaster],
        cursorVisibility: "visible",
        enableHotReload: true,
        antialias: true,
        ...options
      })
    : new VRInstance(bundle, "WelcomeToVR", parent, {
        nativeModules: [browserInfo],  
        enableHotReload: true,  
        antialias: true,
        ...options
      });

  browserInfo._setRNContext(vr.rootView.context);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = { init };