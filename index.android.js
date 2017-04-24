//place code here for android

//Import a library to help create a Component
import React, { Component } from 'react';
import { Image, AppRegistry } from 'react-native';


//create a Component
class App extends Component {
  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{ width: 193, height: 110 }} />
    );
  }
}


//render it to the device
AppRegistry.registerComponent('albums', () => App);
