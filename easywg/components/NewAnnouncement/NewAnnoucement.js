

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class NewAnnoucement extends Component {
    state = {
        wgName: "Team 1B",
        wgTotalRoom: "",
        wgCode: "425689"

    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.logo}>Hello, {this.state.wgName}</Text>

                <Text style={styles.logo}>Write message {this.state.wgTotalRoom}</Text>


                <TextInput
                    style={styles.input}
                    multiline
                // onChangeText={onChangeText}
                // value={text}
                />



                <TouchableOpacity style={styles.textBtn}>
                    <Text style={styles.btnText}>Publish</Text>
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
        fontSize: 30,
        color: "#B2ABAB",
        marginBottom: 30,
        // alignItems: "start"
    },

    textBtn: {
        width: "35%",
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
    btnText: {
        color: "#B2ABAB",
    },
    registrationText: {
        color: "white",
        marginTop: 40
    },
    roomNumberBtn: {
        width: "100%",
        backgroundColor: "#2B2B2B",
        borderRadius: 20,
        borderColor: "#B2ABAB",
        borderWidth: 2,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 1,
        marginBottom: 1,

    },
    input: {
        height: "50%",
        width: "80%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "white",
        fontSize: 20
    }

});

export default NewAnnoucement;