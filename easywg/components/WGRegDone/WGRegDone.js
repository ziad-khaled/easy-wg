

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height

class WGRegDone extends Component {
    state = {
        wgName: "Team 1B",
        wgTotalRoom: "4",
        wgCode: "425689"

    }
    render() {
        return (
            <View style={styles.container}>
            <Image 
                    style={styles.logo}
                    source={require('../../assets/logo.png')}>
            </Image>
  
  
            <View style={styles.midContent}>
                <Text style={styles.textStyle}>WG Name: {this.state.wgName}</Text>

                <Text style={styles.textStyle}>Total Room No: {this.state.wgTotalRoom}</Text>

                <Text style={styles.textStyle}>Room Numbers:  {this.state.userName}</Text>

                <View style={styles.roomNumberList}>
                    <Text style={styles.roomNumberTxt}>101</Text>

                    <Text style={styles.roomNumberTxt}>102</Text>

                    <Text style={styles.roomNumberTxt}>103</Text>

                    <Text style={styles.roomNumberTxt}>104</Text> 
                </View>

                <Text style={styles.textStyle}>WG Code: {this.state.wgCode}</Text>

                <TouchableOpacity style={styles.dashBoardBtn}>
                    <Text style={styles.btnText}>Go to Dashboard</Text>
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
        justifyContent:"center",
        alignItems:"center",
        width: deviceWidth,
    }, 
    textStyle: {
        color:"#B2ABAB", 
        fontSize: 20,
        marginBottom: 30, 
    },
    roomNumberList: {
        flex: 1, 
        flexDirection: "row", 
        justifyContent: "space-around", 
        height: 10
    },
    roomNumberTxt: {
        color: "#B2ABAB",
        backgroundColor: "#2B2B2B",
        borderRadius: 20,
        borderColor: "#B2ABAB",
        borderWidth: 2,
        height: 35,
        alignItems: "center",
        padding: 8,
        margin:5
    },
    dashBoardBtn: {
        width: "35%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 10
    }, 
    btnText:{
        color:"white",    
    }, 
    footer:{
        flex: 1,
    },
<<<<<<< HEAD
    btnText: {
        color: "#B2ABAB",
    },
    registrationText: {
        color: "white",
        marginTop: 40
    },
    roomNumberBtn: {
        width: "15%",
        backgroundColor: "#2B2B2B",
        borderRadius: 20,
        borderColor: "#B2ABAB",
        borderWidth: 2,
        height: 30,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 1,
        marginBottom: 1,
        marginRight: 10

    }

});
=======
  });
>>>>>>> 6c5f4c0d859f74cd7898bdbab1a80399847c122d

export default WGRegDone;