import React from 'react';
import {
    Text,
    View,
    asset
} from 'react-vr'; 
import DashboardLayout from './layouts/DashboardLayout.js'; 

export default class Dashboard extends React.Component { 
   
    render() {
        console.log('this is DASHBOARD', this.props);
        return (
            <View>
                <DashboardLayout content={this.props.content}/> 
            </View> 
        );
    }
}