import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import LoggedIn from './components/LoggedIn/LoggedIn';
import WGJoin from './components/WGJoin/WGJoin';
import WGReg from './components/WGReg/WGReg';
import Settlement1 from './components/Settlement1/Settlement1';
import Settlement2 from './components/Settlement2/Settlement2';
import Flex from './components/FlexTest/Flex';
import NewAnnoucement from './components/NewAnnouncement/NewAnnoucement';
import CleaningTask from './components/CleaningTask/CleaningTask';
import Dashboard from './components/Dashboard/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      // <Login />
      //<Registration></Registration>
      // <LoggedIn />
      // <WGJoin />
      // <WGReg />
      //<Settlement1/>
      //<Settlement2/>
      //<Flex/>
      // <NewAnnoucement />
      // <CleaningTask />
      <Dashboard />
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