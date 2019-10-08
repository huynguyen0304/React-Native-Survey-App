import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


export default class Contact extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.infoContainer}>
                    <View style={styles.rowInfoContainer}>
                        <Image source={require("../../Asset/location.png")} style={styles.imageStyle} />
                        <Text style={styles.infoText}>111 - 121 Ngo Gia Tu P.2 Q.10 Tp.HCM</Text>
                    </View>
                    <View style={styles.rowInfoContainer}>
                        <Image source={require("../../Asset/phone.png")} style={styles.imageStyle} />
                        <Text style={styles.infoText}>(+84) 0123456789</Text>
                    </View>
                    <View style={styles.rowInfoContainer}>
                        <Image source={require("../../Asset/mail.png")} style={styles.imageStyle} />
                        <Text style={styles.infoText}>Welcomecmcsisg@gmail.com</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#ECECEC' },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#ECECEC',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#B7B7B7'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: 'black',
        fontWeight: '500'
    }
})
