# PhantomVR

**PhantomVR** is a proof-of-concept project that allows developers to create web applications using ReactVR a framework for building VR projects using the declarative power of React.

Currently, there is a gap in the VR world between VR content and already existing web applications. The potential that VR gives us is endless, with people already taking advantage to create incredibly immersive experiences in the form of games, spatial visualizations, and artistic projects. However, websites remain static, clunky, and uninteractive. Our goal is to bridge this gap and bring the modern web application into this new platform.

React VR, built off of various technologies including React Native, three.js, WebGL, and WebVR, has the capacity to render single-page applications using the website (and, more specifically, React) design principles, but there is very little that comes with React VR for making this easy. At this point, there are only a few special components that come bundled with React VR (that are built off React Native, React, etc.):

* `Pano`
* `View`
* `Text`
* `Animation`
* `VrButton`
* etc.

As with HTML Elements and React Components, there is certainly the potential to customize websites to a developer's liking. However, for those who lack a thorough understanding of the considerations necessary in rendering components in a 3D dynamic space and principles of VR design, but who simply want to get their website onto a page, our components will take out that guesswork for them.

**Simple explanation**: People have websites/web apps and want to display them in 360° space using VR. We are making that easier by leveraging and building off of existing technologies that have yet to be explored for websites.

This project is being managed by [Drew Stukey](https://github.com/stukey524), [Jon Halloran](https://github.com/JonHalloran), [Michael Vasquez-Pompili](https://github.com/Mpompili), and [Nick Welch](https://github.com/nwelchr).

## What we've done

### 1.) Node.js Module (NPM)

[Link to Package and Readme](https://www.npmjs.com/package/phantom_components)
We have created a React VR library in the form of a Node.js module that allows people to create responsive, flexible, and modular sites. Our components provide a basic template for beginners to construct websites without worrying about the complications that React VR presents, such as 3d spacing and limitations on styling.

### 2.) NPM Package Runner

[Link to Demo Github](https://github.com/PhantomVRTranslate/Phantom-Components-Demo)
In addition to a component library, we have provided a demo site and build in the form of an npx that people can use to create their own sites using our component hierarchy in the intended manner. This also removes issues on getting started that cannot be addressed by our components, e.g. a custom raycaster (i.e. cursor) and other minor configuration settings.

### 3.) HTML file processor and VR previewer

[Link to scripts](https://github.com/PhantomVRTranslate/PhantomScripts)
We also have a script tag that can be inserted into any static HTML page which, coupled with various semantic class names inserted into tags, will pull that information and render it in VR, giving the user a preview of what their site could look like in VR. This will give them an idea of how their website would work in a basic VR environment before diving in and creating their own site using our components.

**TODO: EDIT AND ADD CLASSNAMES AND CODE SNIPPETS**

## Technologies

* Software: React VR
* Hardware: Gear VR, desktop, mobile# PhantomScripts

# PhantomScripts

## Preview a 3D rendering of your VR HTML page
+ Early Stage proof of concept where users can render image, texts, and video content in a 3d environment using specified semantic class names and attributes with `PhantomScripts`

## [Checkout our demo page for this feature](https://phantomvrtranslate.github.io/Phantom-Demo-Site/)

### Phantom Class Names and Attributes 
+ By adding these semantic tags to your specified content, Phantom will be able to locate these tags and render their contents within the VR environment seamlessly

#### `text-vr` class name 
put text content into the innerHTML of a text element to render the text
  - Text with over 120 characters will have *multiple pages* (`<` & `>` page buttons will render if there are *multiple pages*)
```html
<p class="text-vr">This will be rendered in its own text card!</p> 
<p class="text-vr">Now if I wanted to type out a giant story to show the effects 
  of what having over 120 characters would do the text component
  then I would probably use this piece of text right here
</p>
```

#### `image-vr` class name 
put image url into `src` tag to render the image 
```html
<img src="https://imageUrlHere.jpg" class="image-vr" alt="" />
<div src="https://anotherImageUrlHere.jpg" class="image-vr" alt=""></div> 
```

#### `video-vr` class name 
put video url into `src` tag to render the image 
```html
<video src="https://videoUrlHere.jpg" class="video-vr" alt="" />
<div src="https://anotherVideoUrlHere.jpg" class="video-vr" alt=""></div> 
```

#### `image-flex` attribute
change flex unit size of `image-vr` *default at 1* and `video-vr` *default at 2*
```html
<img src="https://imageToTakeUpMoreSpace.jpg" class="image-vr" image-flex="2" alt="" />
<video src="https://videoToTakeLessSpace.jpg" class="video-vr" image-flex="1" alt="" />
```

#### `carousel-image-vr` class name 
Use with any number of HTML tags with an image source to have all tagged content to appear
within the a single 3d component
+ renders the `<` & `>` page buttons to shift through the collection 
```html
<img src="https://image1.jpg" class="image-vr" alt="" />
<img src="https://image2.jpg" class="image-vr" alt="" />
<img src="https://image3.jpg" class="image-vr"  alt="" />
<img src="https://image4.jpg" class="image-vr"  alt="" />
<img src="https://image5.jpg" class="image-vr"  alt="" />
```

#### `gallery-item` class name 
Add this class name on up to 6 HTML tags with image or video sources to render content within a grid-gallery display
+ video and image content should be referenced in the `src` attribute
```html
<img src="https://image1.jpg" class="gallery-item" alt="" />
<img src="https://video1.jpg" class="gallery-item" alt="" />
<img src="https://image2.jpg" class="gallery-item" alt="" />
<img src="https://image3.jpg" class="gallery-item"  ci-flex-vr="1" alt="" />
<img src="https://video2.jpg" class="gallery-item" alt="" />
<img src="https://video3.jpg" class="gallery-item" alt="" />
```

#### `carousel-image-vr` class name 
Use with any number of HTML tags with an image source to have all tagged content to appear
within the a single 3d component
+ renders the `<` & `>` page buttons to shift through the collection 
```html
<img src="https://image1.jpg" class="image-vr" alt="" />
<img src="https://image2.jpg" class="image-vr" alt="" />
<img src="https://image3.jpg" class="image-vr"  alt="" />
<img src="https://image4.jpg" class="image-vr"  alt="" />
<img src="https://image5.jpg" class="image-vr"  alt="" />
```

### Getting Started

1. Copy and Paste the subsequent code under the body tag in your HMTL page 
```html
<body>
  <div style='position: absolute; z-index: 100000; height: 100vh; width: 100vw;' id="phantom"></div>
    <script src="https://rawgit.com/PhantomVRTranslate/PhantomScripts/master/client.bundle.js"></script>
    <script>
      function startVR() {
      window.hideBody(); 
      let mobile = false;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true;
        }
      ReactVR.init(
        'https://rawgit.com/PhantomVRTranslate/PhantomScripts/master/index.bundle.js',document.getElementById('phantom'), {mobile}
      );
      document.querySelector('[title="Full Screen"]').click(); 
    }
    </script>
  ...
</body> 
```
2. Create a any html element with an onlcick event handler of 'startVR()' within the body of your HTML page
+ we recommend using a button
```html
<body>
  ...
  <button onclick='startVR()'></button>
  ...
</body> 
```
3. Add your our class names and attribute tags to render your content in the 3D VR Environment (visible immediately through your browser)!
```html
<body>
  ...
  //renders single image file in its own component 
    <img src="https://image1.jpg" class="item-vr" flex-image="2" alt="" />
  
  //renders single video file in its own component 
    <img src="https://video1.jpg" class="video-vr" alt="" />
  
  //renders multiple images and video within a gallery component 
    <img src="https://image2.jpg" class="gallery-item" alt="" />
    <img src="https://image3.jpg" class="gallery-item"  ci-flex-vr="1" alt="" />
    <img src="https://video2.jpg" class="gallery-item" alt="" />
    <img src="https://video3.jpg" class="gallery-item" alt="" />
  ...
</body>

```

