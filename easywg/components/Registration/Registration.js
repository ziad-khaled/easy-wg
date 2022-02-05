import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    contactNo: "",
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: '25%', width: '56%', marginBottom: 15 }}
          source={require('../../assets/logo.png')}></Image>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            placeholderTextColor="#B2ABAB"
            justifyContent="center"
            onChangeText={text => this.setState({ name: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#B2ABAB"
            justifyContent="center"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#B2ABAB"
            justifyContent="center"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Confirm Password"
            placeholderTextColor="#B2ABAB"
            justifyContent="center"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Contact No."
            placeholderTextColor="#B2ABAB"
            onChangeText={text => this.setState({ contactNo: text })} />
        </View>
        <TouchableOpacity style={styles.registrationBtn}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableOpacity>
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
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
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
  forgot: {
    color: "#FFFFFF",
    fontSize: 15
  },
  registrationBtn: {
    width: "35%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10
  },
  loginText: {
    color: "white",
  },
  registrationText: {
    color: "white",
    marginTop: 40
  }
});

export default Registration;