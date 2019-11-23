import React, { Component } from 'react';
import {
    StyleSheet,
    Text, View,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

const FBSDK = require('react-native-fbsdk');

const {
    LoginManager
} = FBSDK;

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            historyRoute: "",
            access: ""
        }
    }

    componentDidUpdate(prevState) {
        if(prevState.access !== this.state.access.access){
            if (!this.state.access.access){
                alert("Username or Password is invalid !!!");
            } else {
                try {
                    const accesstoken = this.state.access.access;
                    const AccessToken = AsyncStorage.setItem("accesstoken", accesstoken);
                    console.log(AccessToken);
                    this.props.navigation.navigate("start");
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
    }

    _signingoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    _signinFB() {
        LoginManager.logInWithPermissions(["public_profile"]).then(function (result) {
            if (result.isCancelled) {
                console.log("Signin canceled");
            } else {
                console.log("Signin success: " + result.grantedPermissions.toString());
            }
        }, function (error) {
            console.log("An error is occured:" + error)
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.rowInfoContainer1} onPress={() => { this._signingoogle }}>
                        <Icon name="logo-googleplus" size={23} style={styles.icon} />
                        <Text style={styles.buttonText}>Sign in with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowInfoContainer2} onPress={() => { this._signinFB() }}>
                        <Icon name="logo-facebook" size={23} style={styles.icon} />
                        <Text style={styles.buttonText}>Sign in with Facebook</Text>
                    </TouchableOpacity>

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

    onSubmit = async () => {
        await fetch("http://104.248.154.180/api/token/", {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(response => {
                return response.json();
            })
            .then((responseJson) => {
                 this.setState({
                    access: responseJson
                })
            })
            .catch(err => console.log(err));
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
        borderRadius: 8,
        opacity: 0.8,
        borderWidth: 2,
        marginVertical: 7,
        paddingVertical: 12,
    },
    rowInfoContainer2: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#205AA7',
        borderRadius: 8,
        opacity: 0.8,
        borderWidth: 2,
        marginVertical: 7,
        paddingVertical: 12,
    },
    icon: {
        color: "#fff",
        fontSize: 35,
        paddingHorizontal: "7%",
    }
})
