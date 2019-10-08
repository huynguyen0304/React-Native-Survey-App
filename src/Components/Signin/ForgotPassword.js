import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';


export default class ForgotPassword extends Component {
    constructor(){
        super();
        this.state = {
            email: ''
        };
    }

    validateEmail = function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleVerify () {}

    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontWeight: '700',
                    width: "50%",
                    textAlign: "center",
                    marginBottom: "5%"
                }}>
                    Please enter your Email to receive a link Reset Password
                </Text>

                <TextInput
                    style = {styles.inputBox}
                    onChangeText={(email) => this.setState({email})}
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor = "#002f6c"
                    selectionColor="#fff"
                    value={this.state.email}
                />

                <TouchableOpacity style={styles.button} onPress={this.handleVerify}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#1c9ad6"
    },
    inputBox: {
        width: '70%',
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: '400',
        color: '#002f6c',
        marginVertical: 5,
        textAlign: "center"
    },
    button: {
        width: '30%',
        backgroundColor: '#000000',
        opacity: 0.8,
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 12,
        marginBottom: '5%'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textTransform: "capitalize"
    }
})
