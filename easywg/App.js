import 'react-native-gesture-handler';
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
import WGRegDone from './components/WGRegDone/WGRegDone';
import AddExpense from './components/AddExpense/AddExpense';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CleaningSchedule from './components/CleaningSchedule/CleaningSchedule';
import Announcement from './components/Announcement/Announcement';
import ExpenseMain from './components/ExpenseMain/ExpenseMain';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>   
          
          <Stack.Screen name='Home' component={Login} />  
          <Stack.Screen name='Registration' component={Registration} />        
                  
          <Stack.Screen name='LoggedIn' component={LoggedIn} />

          <Stack.Screen name='WGJoin' component={WGJoin} />
          <Stack.Screen name='WGReg' component={WGReg} />
          <Stack.Screen name='WGRegDone' component={WGRegDone} />

          <Stack.Screen name='Dashboard' component={Dashboard} /> 

          <Stack.Screen name='ExpenseMain' component={ExpenseMain} />
          <Stack.Screen name='AddExpense' component={AddExpense} />

          <Stack.Screen name='CleaningSchedule' component={CleaningSchedule} />
          <Stack.Screen name='CleaningTask' component={CleaningTask} />

          <Stack.Screen name='Announcement ' component={Announcement} />
          <Stack.Screen name='NewAnnoucement' component={NewAnnoucement} />

          <Stack.Screen name='Settlement1' component={Settlement1} />
          <Stack.Screen name='Settlement2' component={Settlement2} />
        </Stack.Navigator>  
      </NavigationContainer>     
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