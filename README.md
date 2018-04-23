# PhantomVR

**PhantomVR** is a proof-of-concept project envisioned to be a node package module (npm) that allows developers to create web applications using React VR, a framework for building VR projects using the declarative power of React. 

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

## What we're actually proposing:
We will be adding on to the React VR library to allow to people create responsive, flexible, and modular sites. We will add semantic class names/components/ids/tags/etc. (TBD) that developers can import to easily structure their websites. We will provide them a framework for creating simple websites based on the pre-existing React framework.

## Technologies
- Software: React VR. (Uses three.js, WebGL, WebVR, )
- Node.js backend for hosting content. 
    - `TODO`: Ask Ethan how that works/how to publish a React VR project.
- Hardware: Gear VR, desktop, mobile

## MVPs:

### 1. Demo Site

We essentially want to start with a template that uses our components. We are keeping the elements simple, clean, reusable, and uncomplicated in accordance with VR and React design principles. This will be important for the developer showcase as well as to demonstrate how all our components will fit together and be responsive.

### 2. NPM *(Primary MVP)*

We want a component library that can be bundled into an npm for developers to use. This module will give developers the tools they need to get started with React VR without worrying about the details.

#### Nonexhaustive list of components:
- The idea will be to have default styling/position/event handling on our components (e.g. `layoutOrigin`, `transform`, `flex` properties) with certain props that are handled automatically, given the user follows the protocol for each component.

**`VRTitle`**
- This will position the title of the website above all content.

**`VRSideNavBar` and `VRBottomNavBar`**
- Props: {content} (see below)
- **`VRNavItem`**
    - Houses `VRLabel` and `VRLink`.
- **`VRNavLabel`**
    - Takes in a label.
- **`VRNavLink`**
    - Takes in a url/route.

\* Ideally, we would want them to declare a `VRSideNavBar` or `VRBottomNavBar` with the content they want displayed. This will be images, text, video previews, etc. They will be formatted into cards and formatted appropriately (through `flex` and setting `layoutOrigin` and `transform` properties, etc., as well as through sizes and behavior of containers).

For example:
```javascript
// Each of these elements will be made into their own VRNavItem component with corresponding VRNavLabel and VRNavLink components.

const content = [
        [{label: 'Home', link: '/home'}],
        [{label: 'About', link: '/about'}],
        [{label: 'Gallery', link: '/gallery'}]
    ]

// ~~~~~~~~~~~~~~~~~ //

<VrSideNavBar content={content} />
```

**`VRCard`**
- Default container for index items.
- Props: {content}
- Used as a container for the following:
    - **`VRText`**
        - Default fixed properties: fontSize, color, margin, scrollRate, etc.
        - Passed in props: scrollRate?, text
    - **`VRImage`**
        - Default fixed properties: margin, width, height, layoutOrigin, transform(translate), etc.

**`VRGalleryContainer`**
- Static container for `VRCard` components. Arranged in rows/columns.
- Props: {content}

**`VRCarouselContainer`**
- Scrollable container for `VRCard` components that renders around the user.
    - Scrolling will be managed through 
- Props: {content}

**`VRGazeButton`**
- Has a `setTimeout` method that activates as a click handler after a set amount of time
- Props:
    - `onHover` same as `onEnter` but it also sets timeout
    - `onLeave` same as `onExit` but it also clears timeout
    - `onTrigger` occurs after the timeout has passed with the user continuously gazing at button
    - `style`

**Potentially more to come as we develop our project**, e.g.:
- `VRForm`
- `VRInput`

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

