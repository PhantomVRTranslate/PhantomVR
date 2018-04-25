import React from 'react';
import {
  AppRegistry,
  NativeModules,
  asset,
  VrButton,
  Pano,
  Text,
  View,
} from 'react-vr';
import Dashboard from './components/scenes/Dashboard.js';

const theDocs = NativeModules.DocumentGet;



export default class WelcomeToVR extends React.Component {
  constructor(){
    super();
    this.state = {
     heaven: 'hello'
    };
  }

  componentWillMount(){
  
    console.log('WTF');
    console.log('checking state', this.state.heaven); 
    theDocs.getDocument(result => {
      this.setState({
        heaven: result
      });
    });
  }

  testMethod() {
   
    //this sets the state to have whatever we pass in from the DOM 
   



  }
  render() {
    

    let solution = this.state.heaven; 
    console.log(solution);
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <VrButton onClick={() => this.testMethod()}>
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
          {solution}
        </Text>
        </VrButton>
        <Dashboard/> 
      </View>
    );
  }

}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
