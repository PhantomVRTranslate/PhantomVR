# PhantomVR

**PhantomVR** is a proof-of-concept project envisioned to be a node package module (npm) that allows developers to create web applications using `React VR`, a framework for building VR projects using the declarative power of `React`. 

Currently, there is a gap in the VR world between VR content and already existing web applications. The potential that VR gives us is endless, with people already taking advantage to create incredibly immersive experiences in the form of games, spatial visualizations, and artistic projects. However, websites remain static, clunky, and uninteractive. Our goal is to bridge this gap and bring the modern web application into this new platform.

**Simple explanation**: People have websites/web apps and want to display them in 360° space using VR. We are making that easier by leveraging existing technologies that have yet to be explored for websites.

This project is being managed by [Drew Stukey](https://github.com/stukey524), [Jon Halloran](https://github.com/JonHalloran), [Michael Vasquez-Pompili](https://github.com/Mpompili), and [Nick Welch](https://github.com/nwelchr).

## What we're actually proposing:
We will be adding on to the React VR library to allow to people create responsive, flexible, and modular sites. We will add semantic class names/components/ids/tags/etc. (TBD) that developers can import to easily structure their websites. We will provide them a framework for creating simple websites based on the pre-existing `React` framework.

## Timeline:
### Weekend (Saturday-Sunday)
- [ ] Nick: README. Experiment with `React VR`. Plan out transition from design to implementation.
- [ ] Michael: Make wireframes, high-level UX sketch / description
- [ ] Jonathan: Learn how to build and deploy node package modules
- [ ] Drew: Dive into the source code for `React VR`.
- [ ] All: Explore React VR.
- [ ] **Meeting to discuss project direction at AA (Sunday)**

### For the week:
- [ ] Make initial website. (Monday)
- [ ] Work on integrating functionality into an NPM (Monday/Tuesday)
- [ ] More later...

## Technology:
- Software: React VR (users WebGl and WebVR), JavaScript, three.js
- No backend.
- Server: localhost:8081/vr for testing... TBA for hosting demo page.
- Hardware: Gear VR.

## Initial Website
- Basic website with tags (class names? components?) to show how VR rendering is possible
- `nav/main/footer`, `image`, `text`, semantic tags, etc.

### Example code from React VR for reference:
Taken from [Facebook React VR Intro Page](https://facebook.github.io/react-vr/docs/tutorial.html#content)

```
import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

class WelcomeToVR extends React.Component {

  render() {
    // Displays "hello" text on top of a loaded 360 panorama image.
    // Text is 0.8 meters in size and is centered three meters in front of you.
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
      </View>
    );
  }
};


AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
```

## Questions for meeting
- Advice on NPM vs. Chrome Extension & how to pursue
- What are the features? How much customizability will we give to users of our package?
- Avenues for hosting/deploying
- MVPs / milestones to hit

## TODO
- What can React VR even do for us? What extra functionality does it provide?
- Event listeners: keeping React compenents responsive/modular (passing around state)
- Hands-free text input: already hardcoded into VR experience? Or is that for us to consider?
- Background image rendering: Have a way for them to easily input their own (if it's not already easy), if not use a default
- The bridges between everything. How does this all interact? 
- WebGL and WebVR: web technologies that React VR uses
- User interaction (on Gear VR, it's *look*, *touch*, and *swipe*)
- Image rendering (e.g. carousel)

## Miscellaneous

### Backup Project Ideas
- Full stack project using React VR on the MERN stack. Still a proof-of-concept
- A ReactVR horror game!!!

### Resources:
- [Getting Started](https://facebook.github.io/react-vr/docs/getting-started.html#content)
- [Start a Virtual Reality Project](https://egghead.io/lessons/react-start-a-virtual-reality-project-using-the-react-vr-cli-a3bf79ec)
- [A-Frame – Developer showcase](https://aframe.io/)

### Special Considerations for VR to explore:
- [ ] Z-axis (e.g. `transform: [{translate: [0, 0, -3]}]`)
- [ ] Curvature of 360 space: want to make sure objects are all equidistant from the viewer and angled appropriately
- [ ] `<View>`, `<Pano>`, `<Text>`
- [ ] `AppRegistry`, `asset`

