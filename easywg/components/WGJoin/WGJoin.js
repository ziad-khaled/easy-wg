import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height

class WGJoin extends Component {
  state = {
    userName: "Team 1B",
    email: "",
    password: ""
  }
  render() {
    return (   
      <View style={styles.container}>
          <Image 
                  style={styles.logo}
                  source={require('../../assets/logo.png')}>
          </Image>


          <View style={styles.midContent}>
            <Text style={styles.userTitle}>Hello, {this.state.userName}</Text>

            <Text style={styles.title}>Please Enter WG Code</Text>
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                onChangeText={text => this.setState({ password: text })} />
            </View>
            <TouchableOpacity style={styles.textBtn}>
              <Text style={styles.btnText}>Join</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
              
          </View>                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#2B2B2B',
      alignItems: 'center',
      justifyContent: 'center',
  },
  logo:{
      flex: 2.5,
      width: '75%',
  },
  midContent:{
      flex: 4,
      flexDirection: 'column',
      justifyContent:"flex-start",
      alignItems:"center",
      width: deviceWidth,
  }, 
  userTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#B2ABAB",
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    color: "#B2ABAB",
    marginBottom:15
  },
  inputView:{
      width: '75%',
      backgroundColor:"#2B2B2B",
      borderRadius:25,
      borderColor: "#B2ABAB",
      borderWidth: 2,
      height:65,
      marginBottom:20,
      justifyContent:"center",
      padding:20, 
      alignSelf: "center",
  },
  inputText:{
      height:50,
      color:"#B2ABAB",
      textAlign: 'center',
  },
  textBtn: {
    width: "30%",
    backgroundColor: "#2B2B2B",
    borderRadius: 25,
    borderColor: "#B2ABAB",
    borderWidth: 2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10
  },
  btnText: {
    color: "#B2ABAB",
  },
  footer:{
      flex: 1,
  }
});

export default WGJoin;