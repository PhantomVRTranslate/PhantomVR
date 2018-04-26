import React from 'react';
import {View, Text, VrButton} from 'react-vr';

export default class TextCard extends React.Component {
    render() {
        console.log('in textcard: ', this.props);
        return (
            <VrButton onClick={()=> this.props.clickEvent(this.props.el.type, this.props.el.index)} style = {{
                width: '100%' , 
                height: '100%',
                minHeight: 250,
                maxHeight: 500,
                maxWidth: 400
                //uncomment for border to appear on gaze
                // minWidth: 400,
                // borderColor: '#FFF', 
                // borderWidth: border, 
                }}>
                    <Text
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,200,200,0.5)',
                            width: "100%",
                            height: "100",
                            // maxWidth: 400,
                            // maxHeight: 500,
                            fontSize: 50,
                            fontWeight: '400',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            margin: 1
                    }}
                   >
                    { this.props.src || this.props.text || this.props.children || this.props.el.content}
                    </Text>
            </VrButton> 
   
        );
    }
}

// onEnter={() => this.borderShow()} onExit={() => this.borderShow()} 