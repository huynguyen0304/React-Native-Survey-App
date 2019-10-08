import React, { Component } from 'react';
import {
    StyleSheet,
    Text, View, Image,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { LoginButton, AccessToken } from 'react-native-fbsdk';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';


var FBLoginButton = require("./FBLoginButton");

// LoginManager.logInWithPermissions(["public_profile"]).then(function (result) {
//     if (result.isCancelled) {
//         console.log("Signin canceled");
//     } else {
//         console.log("Signin success: " + result.grantedPermissions);
//     }
// }, function (error) {
//     console.log("An error is occured:" + error)
// })

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            // isLogging: false
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    {/* <Image
                        style={{ width: '50%', height: '20%', marginTop: '2%' }}
                        source={require("../../Asset/CMC-Logo.png")} /> */}

                    
                    <TouchableOpacity style={styles.rowInfoContainer1} onPress={this.signingoogle}>
                        <Image style={{ width: "11%", height: 33, marginRight: "10%", marginLeft: "7%", backgroundColor: '#fff' }} source={require("../../Asset/google.png")} />
                        <Text style={styles.buttonText}>Sign in with Google</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.rowInfoContainer2} onPress={this.signinfacebook}>
                        <Image style={{ width: "13%", height: 33, marginRight: "10%", marginLeft: "6%" }} source={require("../../Asset/facebook.png")} />
                        <Text style={styles.buttonText}>Sign in with Facebook</Text>
                    </TouchableOpacity> */}
                    
                    <FBLoginButton />

                    <Text style={styles.text}>Or Sign in with your account</Text>

                    <TextInput style={styles.inputBox}
                        onChangeText={(username) => this.setState({ username })}
                        underlineColorAndroid='transparent'
                        placeholder="Username"
                        placeholderTextColor="white"
                        selectionColor="#fff"
                        value={this.state.username}
                        onSubmitEditing={() => this.password.focus()}
                    />

                    <TextInput style={styles.inputBox}
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='transparent'
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        ref={(input) => this.password = input}
                        value={this.state.password}
                    />

                    <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("forgot")}>
                        <Text style={styles.support}>Forgot your Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("signup")}>
                        <Text style={styles.support}>Don't have account?</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
    }

    onSubmit = () => {
        fetch("http://my-json-server.typicode.com/huynguyen0304/Survey/account", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => console.log(response.json()))
        .then((response) => {
            if (response.success === true) {
                AsyncStorage.setItem('user', response.user);
                this.props.navigation.navigate("start");
            }
            else {
                alert("Username or Password is incorrect");
            }
        })
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#Dddddd"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    inputBox: {
        width: '80%',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        marginVertical: 3
    },
    button: {
        width: '80%',
        backgroundColor: '#000000',
        opacity: 0.8,
        borderRadius: 25,
        marginVertical: 7,
        paddingVertical: 12,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textTransform: "capitalize"
    },
    support: {
        fontWeight: '700',
        padding: 2,
    },
    text: {
        margin: "7%",
        marginBottom: "2%",
        fontWeight: '700'
    },
    rowInfoContainer1: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#DD0000',
        borderRadius: 4,
        opacity: 0.8,
        borderWidth: 2,
        marginVertical: 7,
        paddingVertical: 12,
    },
    rowInfoContainer2: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#205AA7',
        borderRadius: 4,
        opacity: 0.8,
        borderWidth: 2,
        marginVertical: 7,
        paddingVertical: 12,
    },
})
