import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import jwt_decode from "jwt-decode";
import axios from 'axios';

var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height

const WGReg = (props) => {
/*     state = {
        wgName: "Team 1B",
        wgTotalRoom: "4",
        wgCode: "425689"

    } */
  const [wgName, setWgName] = useState("")
  const [wgTotalRoom, setWgTotalRoom] = useState("")

  const [wgID, setWgID] = useState("")
  const [wgJoinCode, setWgJoinCode] = useState("")


  const handleWGReg = async () => {
    if (wgName && wgTotalRoom) {
      const body = {
        name: wgName,
        totalRoomsNumber: wgTotalRoom,
        rooms: ["101", "102", "103", "104"]
      }

      const config = {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      };


      try {
        const result = await axios.post('http://localhost:3200/api/wgs', body, config)
        //localStorage.setItem('token', result.data.data.jwtToken)
        //props.navigation.navigate('LoggedIn')
        console.log(result)

        const wgIDD = result.data.data.id
        const wgCode = result.data.data.code

        setval(wgIDD, wgCode);


       /*  setWgID(wgIDD)
        setWgJoinCode(wgCode)  */
      } catch (error) {
        console.error(error)
      } 
    }
  }

  const setval = (wgIDD, wgCode) =>{
    console.log(wgIDD)
    setWgID(wgIDD)
    setWgJoinCode(wgCode)

    props.navigation.navigate('WGRegDone', {
      name: wgName,
      room: wgTotalRoom,
      code: wgCode,
      id: wgIDD,
    }) 
  }
  
  return (
      <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}>
          </Image>


          <View style={styles.midContent}>
            <View style={styles.midContentChild1}>
              <Text style={styles.midChild2textStyle}>WG Name:</Text>
              <TextInput
                style={styles.inputBox}
                placeholderTextColor="#B2ABAB"
                justifyContent="center"
                onChangeText={text => setWgName(text)} />
            </View>

            <View style={styles.midContentChild2}>
              <Text style={styles.midChild2textStyle}>Total Room No:</Text>
              <TextInput
                style={styles.inputBox}
                placeholderTextColor="#B2ABAB"
                justifyContent="center"
                onChangeText={text => setWgTotalRoom(text)} />
            </View>

            <View style={styles.midContentChild3}>
              <TouchableOpacity 
                  onPress={()=>{
                      //this.props.navigation.navigate('Dashboard')
                  }}>
                  <Text style={styles.mid3button}>Default Room No.</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={()=>{
                    //this.props.navigation.navigate('Dashboard')
                }}>
                <Text style={styles.mid3button}>Rename Room No.</Text>
              </TouchableOpacity>
            </View>


            <View style={styles.midContentChild4}>
{/*               <Text style={styles.textStyle}>Room Numbers:</Text>

              <View style={styles.roomNumberList}>

                  {
                      this.state.members.map((member, index) => (
                          <Text style={styles.individualExpencese}>{index+1}. {member.name} = {member.spending}</Text>
                      ))
                  }
                  <Text style={styles.roomNumberTxt}>101</Text>

                  <Text style={styles.roomNumberTxt}>102</Text>

                  <Text style={styles.roomNumberTxt}>103</Text>

                  <Text style={styles.roomNumberTxt}>104</Text>
              </View> */}
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity 
                onPress={()=>{
                  handleWGReg()
                    /* this.props.navigation.navigate('Dashboard') */
                }}>
                <Text style={styles.btnText}>Create WG</Text>
            </TouchableOpacity>
          </View>
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
    logo: {
        flex: 2.5,
        width: '75%',
    },
    midContent: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        width: deviceWidth,
    },

    midContentChild1: {
      flex:1,
      flexDirection: 'row',
      width: deviceWidth*.90,
      justifyContent: 'space-around',      
      alignItems: "center",  
    },


    midContentChild2: {
      flex:1,
      flexDirection: 'row',
      width: deviceWidth*.90,
      justifyContent: 'space-around',      
      alignItems: "center",  
    },
    inputBox: {
      backgroundColor: "#2B2B2B",
      borderRadius: 25,
      borderColor: "#B2ABAB",
      borderWidth: 2,
      height: '50%',
      justifyContent: "center",
      color: "#B2ABAB",
      textAlign: 'center',
    },
    midChild2textStyle: {
      color: "#B2ABAB",
      fontSize: 20,
      fontWeight: 'Bold',
    },

    midContentChild3: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: deviceWidth*.85
    },
    mid3button: {
      color: "#B2ABAB",
      backgroundColor: "#2B2B2B",
      borderRadius: 20,
      borderColor: "#B2ABAB",
      borderWidth: 2,
      padding: 15
    },


    



    midContentChild4: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    roomNumberList: {
        flex: 1,
        flexDirection: "row",
        width: deviceWidth*.80,
        justifyContent: "space-around",        
    },
    roomNumberTxt: {
        color: "#B2ABAB",
        backgroundColor: "#2B2B2B",
        borderRadius: 20,
        borderColor: "#B2ABAB",
        borderWidth: 2,
        height: 35,
        padding: 8
    },
    textStyle: {
      color: "#B2ABAB",
      fontSize: 20,
      fontWeight: 'Bold',
      marginBottom: 10,
    },


    footer: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",  
    },
    btnText: {
        color: "white",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        padding:15,
        justifyContent: "center",
        alignItems: "center",        
    },
});

export default WGReg;