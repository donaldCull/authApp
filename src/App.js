import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import LoginForm from './components/LoginForm';
import { Header, Button, CardSection, Spinner } from './components/common';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDISmfZFfntel32aMl7kq4MKCzaz_02a3o',
      authDomain: 'auth-a6b0c.firebaseapp.com',
      databaseURL: 'https://auth-a6b0c.firebaseio.com',
      projectId: 'auth-a6b0c',
      storageBucket: 'auth-a6b0c.appspot.com',
      messagingSenderId: '389214875981'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
    return (
      <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
          Log out
        </Button>
      </CardSection>
    );
    case false:
    return (
      <LoginForm />
    );
    default:
    return (
      <CardSection style={styles.spinnerContainer}>
        <Spinner size="large" />
      </CardSection>
    );

  }
}
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
