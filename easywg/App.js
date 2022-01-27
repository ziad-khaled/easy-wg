import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
//import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import LoggedIn from './components/LoggedIn/LoggedIn';

export default class App extends React.Component {
  render(){
    return(
      //<Login></Login>
      //<Registration></Registration>
      <LoggedIn/>
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