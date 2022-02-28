import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
var deviceWidth = Dimensions.get('window').width; //full width

class Settlement2 extends Component {
    state={
        userName: "Team 1B",
        totalSpending: "90",
        avgCost: "22.5"
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Hello, {this.state.userName}</Text>
              <Text style={styles.title}>Total: € {this.state.totalSpending}</Text> 
            </View>


            <View style={styles.midContent}> 
              <View style={styles.midContentText}>
                <Text style={styles.title1}>The average cost was €{this.state.avgCost}</Text>
                <Text style={styles.title2}>Updated balances are</Text>   
              </View>   
                      
              <View style={styles.summaryView} >
                  <TextInput  
                  style={styles.inputText}
                  onChangeText={text => this.setState({password:text})}/>
              </View>

              <View style={styles.midContentNote}>
                <Text style={styles.title}>Note: After clicking on Settled button, all members balance will be set to €0</Text>
              </View> 
            </View>

            <View style={styles.footer}>
              <TouchableOpacity>
                <Text style={styles.btnText}>Settled</Text>
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
    flex: 1.5,
    flexDirection: 'row',
    width: deviceWidth,
    color:"#B2ABAB",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#B2ABAB",
  },
  title:{
    fontWeight:"bold",
    fontSize:16,
    color:"#B2ABAB",
  },

  midContent: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: deviceWidth,
  },  
  summaryView:{
    flex:2.5
  },
  midContentText:{
    flex: 1,
    justifyContent: 'flex-start',
    width: deviceWidth * .90,
  },
  title1:{
    fontWeight:"bold",
    fontSize:16,
    color:"#B2ABAB",
    marginBottom: 15
  },
  title2:{
    fontWeight:"bold",
    fontSize:16,
    color:"#B2ABAB",
  },
  midContentNote:{
    flex: .5 ,
    justifyContent: 'flex-start',
    width: deviceWidth * .90,
  },



  footer: {
    flex: 1.5,
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

export default Settlement2;