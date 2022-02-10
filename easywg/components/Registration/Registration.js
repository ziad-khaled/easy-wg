import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';

var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height

const Registration = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [contactNumber, setContactNumber] = useState("")

  const handleRegistration = async () => {
    if (email && (password === confirmPassword)) {
      const body = {
        name: name,
        email: email,
        password: password,
        contactNumber: contactNumber
      }

      try {
        const result = await axios.post('http://localhost:3200/api/signup', body)
        props.navigation.navigate('Home')
        console.log(result)
      } catch (error) {
        console.error(error)
      } 
    } else if (password !== confirmPassword) {
      alert('Password and confirm password does not match' )
    } else {
      alert('Please fill up all the fields')
    }
  }

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
            placeholder="Name"
            placeholderTextColor="#B2ABAB"
            justifyContent="center"
            onChangeText={text => setName(text)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#B2ABAB"
            justifyContent="center"
            onChangeText={text => setEmail(text)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#B2ABAB"
            justifyContent="center"
            onChangeText={text => setPassword(text)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password"
            placeholderTextColor="#B2ABAB"
            justifyContent="center"
            onChangeText={text => setConfirmPassword(text)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Contact No."
            placeholderTextColor="#B2ABAB"
            onChangeText={text => setContactNumber(text)} />
        </View>
        <TouchableOpacity 
          style={styles.registrationBtn}
          onPress={()=>{
            handleRegistration()
          }}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.footer}></View>                
    </View>
  );
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
    justifyContent:"center",
    alignItems:"center",
    width: deviceWidth,
  }, 
  inputView:{
      width: '75%',
      backgroundColor:"#2B2B2B",
      borderRadius:25,
      borderColor: "#B2ABAB",
      borderWidth: 2,
      height:50,
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
  loginText:{
      color:"white",    
  }, 
  footer:{
      flex: 1,
  }  
});

export default Registration;