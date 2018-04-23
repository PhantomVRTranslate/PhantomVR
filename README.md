# PhantomVR

**PhantomVR** is a proof-of-concept project envisioned to be a node package module (npm) that allows developers to create web applications using `React VR`, a framework for building VR projects using the declarative power of `React`. 

Currently, there is a gap in the VR world between VR content and already existing web applications. The potential that VR gives us is endless, with people already taking advantage to create incredibly immersive experiences in the form of games, spatial visualizations, and artistic projects. However, websites remain static, clunky, and uninteractive. Our goal is to bridge this gap and bring the modern web application into this new platform.

React VR, built off of various technologies including React Native, three.js, WebGL, and WebVR, has the capacity to render single-page applications using the website (and, more specifically, React) design principles, but there is very little that comes with React VR for making this easy. At this point, there are only a few special components that come bundled with React VR (that are built off React Native, React, etc.):

- `Pano`
- `View`
- `Text`
- `Animation`
- etc.

As with HTML Elements and React Components, there is certainly the potential to customize websites to a developer's liking. However, for those who lack a thorough understanding of the considerations necessary in rendering components in a 3D dynamic space and principle of VR design, but who simply want to get their website onto a page, our components will take out that guesswork for them. 

**Simple explanation**: People have websites/web apps and want to display them in 360° space using VR. We are making that easier by leveraging and building off of existing technologies that have yet to be explored for websites.

This project is being managed by [Drew Stukey](https://github.com/stukey524), [Jon Halloran](https://github.com/JonHalloran), [Michael Vasquez-Pompili](https://github.com/Mpompili), and [Nick Welch](https://github.com/nwelchr).

## What we're actually proposing:
We will be adding on to the React VR library to allow to people create responsive, flexible, and modular sites. We will add semantic class names/components/ids/tags/etc. (TBD) that developers can import to easily structure their websites. We will provide them a framework for creating simple websites based on the pre-existing `React` framework.

## MVPs:

### NPM *(Primary MVP)*

We want component library that can be bundled into an npm for developers to use. This module will give developers the tools they need to get started with React VR without worrying about the details.

#### Nonexhaustive list of components:

**`VRTitle`**
    - This will position the title of the website above all content.
    - Default fixed properties: `fontSize`, `color`, `layoutOrigin` etc.

**`VRSideNavBar` and `VRBottomNavBar`**
    - Default fixed properties: `padding`, `layoutOrigin`, `transform`, etc.
    - Props: {content}*
    - **`VRNavItem`**
        - Houses `VRLabel` and `VRLink`.
    - **`VRNavLabel`**
        - Simply takes in text.
    - **`VRNavLink`**
        - Takes in a url/route.

* Ideally, we would want them to declare a `VRSideNavBar` or `VRBottomNavBar` with the content they want displayed. This will be images, text, video previews, etc. They will be formatted into cards and formatted appropriately (through `flex` and setting `layoutOrigin` and `transform` properties, etc., as well as through sizes and behavior of containers).

For example:
```javascript
// Each of these elements will be made into their own VRNavItem component with corresponding VRNavLabel and VRNavLink components.

const content = [
        [{label: 'Home', link: '/home'}],
        [{label: 'About', link: '/about'}],
        [{label: 'Gallery', link: '/gallery'}]
    ]

// **********************

<VrSideNavBar content={content} />
```

**`VRCard`**
- Default container for index items, including:
    - **`VRText`**
        - Default fixed properties: fontSize, color, margin, scrollRate, etc.
        - Passed in props: scrollRate?, text
    - **`VRImage`**
        - Default fixed properties: margin, width, height, layoutOrigin, transform(translate), etc.

**`VRGalleryContainer`**
    - Static container for `VRCard` components. Arranged in rows/columns.

**`VRCarouselContainer`**
    - Scrollable container for `VRCard` components that renders around the user.

### Web Scraper / File Processor (*\*Bonus\**)
- 


## Timeline:
### Weekend (Saturday-Sunday)
- [x] Nick: README. Plan out transition from design to implementation.
- [x] Michael: Make wireframes, high-level UX sketch / description
- [x] Jonathan: Learn how to build and deploy node package modules
- [x] Drew: Dive into the source code for `React VR`.
- [x] All: Explore React VR.
- [x] **Meeting to discuss project direction at AA (Sunday)**
- [x] All: Begin building out components.

### For the week:
- [ ] Make initial website to show how elements will interact with our components.
- [ ] Work on integrating functionality into a polished NPM and publish.
- [ ] *\*Bonus\**: Work on web scraper/file processor to simplify process for designers.

## Technologies:
- Software: ReactVR. (Uses three.js, WebGL, WebVR, )
- Node.js backend for hosting content. 
    - `TODO`: Ask Ethan how that works.
- Hardware: Gear VR, desktop, mobile

## Avenues for further exploration
- What can React VR even do for us? What extra functionality does it provide?
- Event listeners: keeping React compenents responsive/modular (passing around state)
- Hands-free text input: already hardcoded into VR experience? Or is that for us to consider?
- Background image rendering: Have a way for them to easily input their own (if it's not already easy), if not use a default
- The bridges between everything. How does this all interact? 
- WebGL and WebVR: web technologies that React VR uses
- User interaction (on Gear VR, it's *look*, *touch*, and *swipe*)
- Image rendering (e.g. carousel)

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

