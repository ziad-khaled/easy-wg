import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height

class Login extends Component {
  state = {
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
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#B2ABAB"
              onChangeText={text => this.setState({ password: text })} />
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.registrationText}>New Here? Register</Text>
          </TouchableOpacity>
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
  header: {
    flex: 2,
    flexDirection: 'column'
  },
  logo: {
    flex: 2.5,
    width: '75%',
  },
  midContent: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: deviceWidth,
  },
  inputView: {
    width: '75%',
    backgroundColor: "#2B2B2B",
    borderRadius: 25,
    borderColor: "#B2ABAB",
    borderWidth: 2,
    height: 65,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    alignSelf: "center",
  },
  inputText: {
    height: 50,
    color: "#B2ABAB",
    textAlign: 'center',
  },
  loginBtn: {
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
  forgot: {
    color: "#FFFFFF",
    fontSize: 15,
    marginTop: 15
  },
  footer: {
    flex: 1,
  },
  registrationText: {
    color: "white",
    marginTop: 40
  }
});

export default Login;