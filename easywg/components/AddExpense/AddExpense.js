

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height


class AddExpense extends Component {
    state = {
        wgName: "Team 1B"

    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.logo}>Hello, {this.state.wgName}</Text>
                </View>

                <View style={styles.midContent}>

                    <View style={styles.dateDesign}>

                        <Text style={styles.logo}>Date</Text>

                        <TextInput
                            style={styles.input}
                            multiline
                        // onChangeText={onChangeText}
                        // value={text}
                        />
                    </View>

                    <View style={styles.dateDesign}>
                        <Text style={styles.logo}>Product Name</Text>

                        <TextInput
                            style={styles.input}
                            multiline
                        // onChangeText={onChangeText}
                        // value={text}
                        />
                    </View>

                    <View style={styles.dateDesign}>
                        <Text style={styles.logo}>Price</Text>

                        <TextInput
                            style={styles.input}
                            multiline
                        // onChangeText={onChangeText}
                        // value={text}
                        />
                    </View>

                    <View style={styles.dateDesign}>
                        <Text style={styles.logo}>Note</Text>

                        <TextInput
                            style={styles.input}
                            multiline
                        // onChangeText={onChangeText}
                        // value={text}
                        />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.textBtn}>
                            <Text style={styles.btnText}>Upload Receipt</Text>
                        </TouchableOpacity>

                    </View>




                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Continue</Text>
                    </TouchableOpacity>
                </View>
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
    header: {
        flex: 1,
        width: deviceWidth,
        direction: "ltr"


    },
    logo: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#B2ABAB",
        marginBottom: 30,
        // alignItems: "start"
    },
    midContent: {
        flex: 6,
        flexDirection: 'column',

        // justifyContent: "center",
        // alignItems: "center",
        width: deviceWidth,
        direction: 'ltr',
        marginLeft: 50
    },
    dateDesign: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        width: deviceWidth
    },
    uploadReceiptDesigh: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        // marginRight: 10,
        borderRadius: 20,


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
        width: "20%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "white",
        fontSize: 20,
        direction: 'rtl'
    },
    loginBtn: {
        width: "35%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
        // marginTop: 15,
        // marginBottom: 10
    },
    loginText: {
        color: "white",
    },
    footer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: "space-around",
        // marginRight: 10,
        borderRadius: 20,
        width: deviceWidth
    }

});

export default AddExpense;