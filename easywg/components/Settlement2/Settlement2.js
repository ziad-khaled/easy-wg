import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class Settlement2 extends Component {
    state={
        userName: "Team 1B",
        totalSpending: "90",
        avgCost: "22.5"
    }
    render() {
        return (
          <View style={styles.container}>
          <Image 
                  style={styles.logo}
                  source={require('../../assets/logo.png')}>
          </Image>


          <View style={styles.midContent}>
              
          </View>

          <View style={styles.footer}>
              
          </View>                
      </View>

            <View style={styles.container}>
                <Text style={styles.logo}>Hello, {this.state.userName}</Text>
                <Text style={styles.title}>Total: € {this.state.totalSpending}</Text>  
                      
                <Text style={styles.title}>The average cost was €{this.state.avgCost}</Text>
                <Text style={styles.title}>Updated balances are</Text>         
                <View style={styles.inputView} >
                    <TextInput  
                    style={styles.inputText}
                    onChangeText={text => this.setState({password:text})}/>
                </View>

                <Text style={styles.title}>Note: After clicking on Settled button, all members balance will be set to €0</Text> 
                <TouchableOpacity style={styles.textBtn}>
                    <Text style={styles.btnText}>Settled</Text>
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
    logo:{
      fontWeight:"bold",
      fontSize:30,
      color:"#B2ABAB",
      marginBottom:30,
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:"#B2ABAB",
      },
    textBtn:{
        width:"30%",
        backgroundColor:"#2B2B2B",
        borderRadius:25,
        borderColor: "#B2ABAB",
        borderWidth: 2,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
        marginBottom:10
      },
      inputView:{
        width:"60%",
        backgroundColor:"#2B2B2B",
        borderRadius:25,
        borderColor: "#B2ABAB",
        borderWidth: 2,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },

    inputText:{
        height:50,
        color:"#B2ABAB",
        textAlign: 'center'
      },
    btnText:{
      color:"#B2ABAB",    
    }, 
    registrationText:{
        color:"white",      
        marginTop: 40
    }
  });

export default Settlement2;