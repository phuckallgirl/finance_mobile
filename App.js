import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
