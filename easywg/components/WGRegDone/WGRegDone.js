

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class WGRegDone extends Component {
    state = {
        userName: "Team 1B",
        email: "",
        password: ""
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ height: '25%', width: '50%', marginBottom: 15 }}
                    source={require('../../assets/logo.png')}></Image>

                <Text style={styles.logo}>Hello, {this.state.userName}</Text>

                <TouchableOpacity style={styles.textBtn}>
                    <Text style={styles.btnText}>Join WG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textBtn}>
                    <Text style={styles.btnText}>Register New WG</Text>
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
    },
    textBtn: {
        width: "50%",
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
    }
});

export default WGRegDone;