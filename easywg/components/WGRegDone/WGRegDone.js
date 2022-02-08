

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

class WGRegDone extends Component {
    state = {
        wgName: "Team 1B",
        wgTotalRoom: "",
        wgCode: "425689"

    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ height: '25%', width: '56%', marginBottom: 15 }}
                    source={require('../../assets/logo.png')}></Image>

                <Text style={styles.logo}>WG Name: {this.state.wgName}</Text>

                <Text style={styles.logo}>Total Room No: {this.state.wgTotalRoom}</Text>

                <Text style={styles.logo}>Room Numbers:  {this.state.userName}</Text>

                {/* new side by side button here */}
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", height: 10 }}>

                    {/* "Here i have to put space between the buttons" */}
                    <TouchableOpacity style={styles.roomNumberBtn}>
                        <Text style={styles.btnText}>101</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roomNumberBtn}>
                        <Text style={styles.btnText}>102</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roomNumberBtn}>
                        <Text style={styles.btnText}>103</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roomNumberBtn}>
                        <Text style={styles.btnText}>104</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.logo}>WG Code: {this.state.wgCode}</Text>

                <TouchableOpacity style={styles.textBtn}>
                    <Text style={styles.btnText}>Go to Dashboard</Text>
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

export default WGRegDone;