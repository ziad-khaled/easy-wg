import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height

class Dashboard extends Component {
    state = {
        wgName: "Team 1B",
        anwarMoEx: "20",
        hasibMoEx: "15",
        soyamMoEx: "25",
        ziadMoEx: "30"

    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}>
                </Image>


                <View style={styles.midContent}>
                    <View style={styles.inputView} >
                        {/* Hello team1B & icon */}
                        <Text style={styles.teamNameText} > Hello, {this.state.wgName}</Text>

                        <TouchableOpacity style={styles.dashBoardBtn}>
                            <Text style={{ fontSize: 30, fontWeight: "bold", direction: "rtl" }}>!</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.smallTextView} >
                        {/* spending summary and the box */}
                        <Text style={styles.loginText} > Spending Summary</Text>
                    </View>

                    <View style={styles.memberListView} >

                        <Text style={styles.individualExpencese}>1. Anwer = {this.state.anwarMoEx}</Text>
                        <Text style={styles.individualExpencese}>2. Hasib = {this.state.hasibMoEx}</Text>
                        <Text style={styles.individualExpencese}>3. Soyam = {this.state.soyamMoEx}</Text>
                        <Text style={styles.individualExpencese}>4. Ziad = {this.state.ziadMoEx}</Text>
                        <Text style={styles.individualExpencese}>Next Cleaning: Hasib</Text>
                        <Text style={styles.individualExpencese}>Date : 10.02.2022 to 16.02.2022</Text>


                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Expenses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Settle Up</Text>
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
    // header: {
    //     flex: 2,
    //     flexDirection: 'column'
    // },
    logo: {
        flex: 2.5,
        width: '75%',
    },
    midContent: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        width: deviceWidth,
    },
    inputView: {
        // flex: 1,
        width: '90%',
        backgroundColor: "#2B2B2B",
        flexDirection: "row",
        // borderRadius: 25,
        borderColor: "#B2ABAB",
        // borderWidth: 2,
        // height: 65,
        marginBottom: 20,
        justifyContent: "space-between",
        // padding: 20,
        alignSelf: "center",
    },
    smallTextView: {
        // flex: 8,
        width: '90%',
        backgroundColor: "#2B2B2B",
        // flexDirection: "row",
        // borderRadius: 25,
        borderColor: "#B2ABAB",
        // borderWidth: 2,
        //height: 65,
        // marginBottom: 20,
        justifyContent: "space-between",
        // padding: 20,
        alignSelf: "center",
    },
    teamNameText: {
        // height: 50,
        color: "#B2ABAB",
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "700"
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
    // forgot: {
    //     color: "#FFFFFF",
    //     fontSize: 15,
    //     marginTop: 15
    // },
    footer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: "space-around",
        // marginRight: 10,
        borderRadius: 20,
    },
    // registrationText: {
    //     color: "white",
    //     marginTop: 40
    // },
    dashBoardBtn: {
        width: "9%",
        backgroundColor: "#fb5b5a",
        borderRadius: 50,
        height: 35,
        direction: "rtl",
        alignItems: "center",
        // justifyContent: "center",

        // margin: 10
        // marginTop: 15,
        // marginBottom: 10
    },
    memberListView: {
        flex: 6,
        flexDirection: 'column',

        // justifyContent: "center",
        // alignItems: "center",
        width: deviceWidth,
        direction: 'ltr',
        marginLeft: 50
    },
    individualExpencese: {
        color: "white",
        marginTop: 15,
        fontSize: 25,
        fontWeight: "300"
    }
});

export default Dashboard;