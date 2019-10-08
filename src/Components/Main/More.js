import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';


export default class More extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>More</Text>
                </View>
                <View style={styles.rowInfoContainer}>
                    <Image source={require("../../Asset/account.png")} style={styles.iconStyle} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("userProfile") }}>
                        <Text style={styles.infoText}>My Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowInfoContainer}>
                    <Image source={require("../../Asset/history-survey.png")} style={styles.iconStyle} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("instruction") }}>
                        <Text style={styles.infoText}>My History Survey Form</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowInfoContainer}>
                    <Image source={require("../../Asset/instruction.png")} style={styles.iconStyle} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("ruleCondition") }}>
                        <Text style={styles.infoText}>Instructions</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowInfoContainer}>
                    <Image source={require("../../Asset/feedback.png")} style={styles.iconStyle} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("feedback") }}>
                        <Text style={styles.infoText}>Feedback to us</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowInfoContainer}>
                    <Image source={require("../../Asset/phone.png")} style={styles.iconStyle} />
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("contact") }}>
                        <Text style={styles.infoText}>Contact Us</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { flex: 1, backgroundColor: '#1c9ad6', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 },
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 40, marginLeft: '3%', fontWeight: 'bold' },
    wrapper: {
        flex: 1,
        backgroundColor: '#ECECEC',
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#B7B7B7'
    },
    iconStyle: {
        width: 30,
        height: 30,
        marginRight: "10%",
        marginLeft: "10%"
    },
    infoText: {
        fontFamily: 'Avenir',
        color: 'black',
        fontWeight: '700'
    }
})
