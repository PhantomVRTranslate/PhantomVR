# PhantomVR

**PhantomVR** is a proof-of-concept project that allows developers to create web applications using ReactVR a framework for building VR projects using the declarative power of React.

Currently, there is a gap in the VR world between VR content and already existing web applications. The potential that VR gives us is endless, with people already taking advantage to create incredibly immersive experiences in the form of games, spatial visualizations, and artistic projects. However, websites remain static, clunky, and uninteractive. Our goal is to bridge this gap and bring the modern web application into this new platform.

React VR, built off of various technologies including React Native, three.js, WebGL, and WebVR, has the capacity to render single-page applications using the website (and, more specifically, React) design principles, but there is very little that comes with React VR for making this easy. At this point, there are only a few special components that come bundled with React VR (that are built off React Native, React, etc.):

- `Pano`
- `View`
- `Text`
- `Animation`
- `VrButton`
- etc.

As with HTML Elements and React Components, there is certainly the potential to customize websites to a developer's liking. However, for those who lack a thorough understanding of the considerations necessary in rendering components in a 3D dynamic space and principles of VR design, but who simply want to get their website onto a page, our components will take out that guesswork for them. 

**Simple explanation**: People have websites/web apps and want to display them in 360° space using VR. We are making that easier by leveraging and building off of existing technologies that have yet to be explored for websites.

This project is being managed by [Drew Stukey](https://github.com/stukey524), [Jon Halloran](https://github.com/JonHalloran), [Michael Vasquez-Pompili](https://github.com/Mpompili), and [Nick Welch](https://github.com/nwelchr).

## What we've done
### 1.) Node.js Module (NPM)
[Link to Package and Readme](https://www.npmjs.com/package/phantom_components)
We have created a React VR library in the form of a Node.js module that allows people to create responsive, flexible, and modular sites. Our components provide a basic template for beginners to construct websites without worrying about the complications that React VR presents, such as 3d spacing and limitations on styling.

### 2.) NPM Package Runner
In addition to a component library, we have provided a demo site and build in the form of an npx that people can use to create their own sites using our component hierarchy in the intended manner. This also removes issues on getting started that cannot be addressed by our components, e.g. a custom raycaster (i.e. cursor) and other minor configuration settings.

### 3.) HTML file processor and VR previewer
We also have a script tag that can be inserted into any static HTML page which, coupled with various class names inserted in tags, will pull that information and render it in VR, giving the user a preview of what their site could look like in VR.

## Technologies
- Software: React VR
- Hardware: Gear VR, desktop, mobile

### 3. Web Scraper / File Processor (*\*Bonus\**)
- If we have time, we want to explore the idea of simplying the process of rendering previews of content in VR for developers. Rather than having them learn the React VR technology as well as our library, it would be ideal for them to label their pre-existing content with certain tags or identifiers (i.e., class names) that a scraper or file processor would extract. Based off these class names (which would be directly associated with our components), we would render the inner HTML (and, ideally, event handling, props/state, etc.) in our default template. This will give them an idea of how their website could work in a basic VR environment before diving in and creating their own site using our components.

## Timeline:
### Weekend (Saturday-Sunday)
- [x] Nick: README. Plan out transition from design to implementation.
- [x] Michael: Make wireframes, high-level UX sketch / description
- [x] Jon: Learn how to build and deploy node package modules
- [x] Drew: Dive into the source code for `React VR`.
- [x] All: Explore React VR.
- [x] **Meeting to discuss project direction at AA (Sunday)**
- [x] All: Begin building out components.

### For the week
#### Monday
- [ ] Work with `CylindricalPlane`. (Michael)
- [ ] Create `NavBar` and `GazeButton` components. Learn about incorporating React Router. (Nick)
- [ ] Create `Carousel` and `Gallery` components. (Jon, Drew)
- [ ] Continue exploring React VR and it's possibilities/limitations. (All)

#### Tuesday
- [ ] Begin piecing together demo website with created components. (All)

#### Wednesday
- [ ] Continue working on NPM and integrating further functionality. (All)

#### Thursday
- [ ] Polish and publish NPM. (Nick, Jon)
- [ ] Begin working on web scraper. (Drew, Michael)
    - We are in contact with a VR developer and have resources that we are exploring for making this happen. 



## Miscellaneous

### Resources:
- [Getting Started](https://facebook.github.io/react-vr/docs/getting-started.html#content)
- [Start a Virtual Reality Project](https://egghead.io/lessons/react-start-a-virtual-reality-project-using-the-react-vr-cli-a3bf79ec)
- [A-Frame – Developer showcase](https://aframe.io/)

### Example code from React VR for reference:
Taken from [Facebook React VR Intro Page](https://facebook.github.io/react-vr/docs/tutorial.html#content)

```javascript
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

