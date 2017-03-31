import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import App from './app/App';
import styles from './app/styles';


export default class TotemApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('TotemApp', () => TotemApp);
