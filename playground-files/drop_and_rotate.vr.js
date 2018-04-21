import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Animated,
  Pano,
  Text,
  View,
  Image,
  Sphere,
  PointLight,
  CylindricalPanel
} from 'react-vr';


const AnimatedModel = Animated.createAnimatedComponent(CylindricalPanel);


export default class WelcomeToVR extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rotation: new Animated.Value(300),
      height: new Animated.Value(0)
    };
    this.drop = this.drop.bind(this); 
    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    this.drop(); 
  }

    drop() {
      this.state.height.setValue(3);
      Animated.timing(
        this.state.height,
        {
          toValue: -2,
          duration: 3000,
        }
      ).start(this.rotate);
    }

  rotate() {

    let b = this.state.rotation._value;

    this.state.rotation.setValue(b);
    Animated.timing(
      this.state.rotation,
      {
        toValue: b + 360,
        duration: 5000,
      }
    ).start(this.rotate);
  }

  render() {

    return (
      <View>
      <Pano source={asset('chess-world.jpg')} />

      <AnimatedModel 
            layer={{width: 4096, height: 800}} 
            style={{
            transform: [
              {translateY: this.state.height},
              {rotateY: this.state.rotation}
            ]
          }}>
          <View
            style={{
              opacity: 1,
              width: 2000,
              height: 720,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                borderRadius: 20,
                backgroundColor: 'red',
                borderWidth: 10,
                width: 650,
                height: 400,
              }}
              source={asset('chess-world.jpg')
              }
            />
          </View>
          
        </AnimatedModel>
</View>

        );
      }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
