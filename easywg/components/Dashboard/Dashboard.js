import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';

var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height

class Dashboard extends Component {
    state = {
        wgName: "Team 1B",
        members: []
    }

    async componentDidMount() {
        try {
            const result = await axios.get('http://localhost:3200/api/wgs/1/dashboard', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            //props.navigation.navigate('LoggedIn')
            console.log(result)
            const memberInfo = result.data.data.membersSpendingsSummary.map(member => ({
                    name: member.userName,
                    spending: member.spending
                }))
            this.setState({
                ...this.state,
                members: memberInfo,
                wgName: result.data.data.wg.name
            })
            } catch (error) {
            console.error(error)
            }
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

                        {
                            this.state.members.map((member, index) => (
                                <Text style={styles.individualExpencese}>{index+1}. {member.name} = {member.spending}</Text>
                            ))
                        }
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