import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
var deviceWidth = Dimensions.get('window').width; //full width

class Settlement1 extends Component {
    state={
        userName: "Team 1B",
        totalSpending: "90"
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Hello, {this.state.userName}</Text>
              <Text style={styles.title}>Total: € {this.state.totalSpending}</Text> 
            </View>

            <View style={styles.midContent}>             
              <Text style={styles.title}>Spending Summary</Text>         

              
              
            </View>

            <View style={styles.footer}>
              <TouchableOpacity>
                <Text style={styles.btnText}>Settle Now</Text>
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
    header:{
      flex: 2,
      flexDirection: 'row',
      color:"#B2ABAB",
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    headerTitle: {
      fontWeight: "bold",
      fontSize: 25,
      color: "#B2ABAB",
    },

    midContent: {
      flex: 4,
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      width: deviceWidth,
    },  
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:"#B2ABAB",
      },


    footer: {
      flex: 2,
      alignItems: "center",
      justifyContent: "center",
    },
    btnText:{
      color:"#B2ABAB",    
      fontWeight:"bold",
      fontSize:15,
      borderRadius: 20,
      borderColor: "#B2ABAB",
      borderWidth: 2,
      padding: 15
    }, 
  });

export default Settlement1;