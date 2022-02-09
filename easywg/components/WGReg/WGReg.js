import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class WGReg extends Component {
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
          <Text style={styles.logo}>Hello, {this.state.userName}</Text>

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
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#B2ABAB",
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#B2ABAB",
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
  inputView: {
    width: "60%",
    backgroundColor: "#2B2B2B",
    borderRadius: 25,
    borderColor: "#B2ABAB",
    borderWidth: 2,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },

  inputText: {
    height: 50,
    color: "#B2ABAB",
    textAlign: 'center'
  },
  btnText: {
    color: "#B2ABAB",
  },
  registrationText: {
    color: "white",
    marginTop: 40
  }
});

export default WGReg;