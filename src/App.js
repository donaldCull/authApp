import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDISmfZFfntel32aMl7kq4MKCzaz_02a3o',
      authDomain: 'auth-a6b0c.firebaseapp.com',
      databaseURL: 'https://auth-a6b0c.firebaseio.com',
      projectId: 'auth-a6b0c',
      storageBucket: 'auth-a6b0c.appspot.com',
      messagingSenderId: '389214875981'
  });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
