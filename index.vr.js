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
import TextVR from './components/scenes/layouts/elements/TextVr';
const theDocs = NativeModules.DocumentGet;



export default class WelcomeToVR extends React.Component {
  constructor(){
    super();
    this.state = {
     store: []
    };
  }

  componentWillMount(){
  
    console.log('WTF');
    console.log('checking state', this.state.store); 
    theDocs.getDocument(result => {
      this.setState({
        store: result
      });
    });
  }

  testMethod() {
   
    //this sets the state to have whatever we pass in from the DOM 
   



  }
  render() {
    console.log("store", this.state.store);
    let toRender = this.state.store.map((el)=>{
      console.log("el", el);
      switch(el.type){
        case "text":
          console.log("in text", console.log(el));
          return (<Text
                    style={{
                        backgroundColor: 'rgba(0,200,200,0.5)',
                        color: '#FFF',
                        fontSize: .2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        //combo of height && max height to ensure one component doesn't take up the whole 180º
                        height: 1,
                        maxHeight: 1,
                        width: 1,
                        maxWidth: 1,
                        layoutOrigin: [0.5, 0.5],
                        transform: [{translate: [0, 0, -2]}]
                    }}>
                    {`${el.content}`}  
                  </Text> );
      }
    });
    console.log("toRender", toRender);
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        {toRender}
          <VrButton onClick={() => this.testMethod()}>
          </VrButton>
        <Dashboard content={this.state.store}/> 
      </View>
    );
  }

}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
