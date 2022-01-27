import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

export default class App extends React.Component {
  render(){
    return(
      //<Login></Login>
      <Registration></Registration>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});