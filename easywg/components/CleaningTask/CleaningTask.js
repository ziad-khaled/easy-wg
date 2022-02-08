import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

var deviceWidth = Dimensions.get('window').width; //full width
// var deviceHeight = Dimensions.get('window').height; //full height

class CleaningTask extends Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                </View>


                <View style={styles.midContent}>
                    {/* do all the task here */}
                    <Text style={styles.headerText}>Common Cleaning Task</Text>

                    <Text style={styles.cleaningText}>1. Clear Common Space</Text>
                    <Text style={styles.cleaningText}>2. Clear Kitchen</Text>
                    <Text style={styles.cleaningText}>3. Clean Toilet</Text>
                    <Text style={styles.cleaningText}>4. Gather Trash</Text>
                    <Text style={styles.cleaningText}>5. Throw Trash in Trashcan</Text>



                </View>

                {/* <View style={styles.footer}>

                </View> */}
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
        flex: 1,
        flexDirection: 'column'
    },
    // logo: {
    //     flex: 2.5,
    //     width: '75%',
    // },
    midContent: {
        flex: 6,
        flexDirection: 'column',

        // justifyContent: "center",
        // alignItems: "center",
        width: deviceWidth,
        direction: 'ltr',
        marginLeft: 50
    },
    // inputView: {
    //     width: '75%',
    //     backgroundColor: "#2B2B2B",
    //     borderRadius: 25,
    //     borderColor: "#B2ABAB",
    //     borderWidth: 2,
    //     height: 65,
    //     marginBottom: 20,
    //     justifyContent: "center",
    //     padding: 20,
    //     alignSelf: "center",
    // },
    // inputText: {
    //     height: 50,
    //     color: "#B2ABAB",
    //     textAlign: 'center',
    // },
    // loginBtn: {
    //     width: "35%",
    //     backgroundColor: "#fb5b5a",
    //     borderRadius: 25,
    //     height: 50,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     marginTop: 15,
    //     marginBottom: 10
    // },
    // loginText: {
    //     color: "white",
    // },
    // forgot: {
    //     color: "#FFFFFF",
    //     fontSize: 30,
    //     marginTop: 15


    // },
    // footer: {
    //     flex: 1,
    // },
    cleaningText: {
        color: "white",
        marginTop: 15,
        fontSize: 25,
        fontWeight: "300"
    },

    headerText: {
        color: "white",
        marginTop: 15,
        fontSize: 35,
        marginBottom: 40,

    }
});

export default CleaningTask;