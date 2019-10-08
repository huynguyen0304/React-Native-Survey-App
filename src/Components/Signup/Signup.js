import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

// import TextField from '../Validation/textfield';
// import validation from '../Validation/validation';
// import validate from '../Validation/validation_wrapper';


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            usernameError: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            confirmpassword: '',
            confirmpasswordError: ''
        }
    }

    validateEmail = function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleSignup = () => {
        // const usernameError = validate('username', this.state.username)
        // const emailError = validate('email', this.state.email)
        // const passwordError = validate('password', this.state.password)
        // const confirmpasswordError = validate('confirmpassword', this.state.confirmpassword)

        // this.setState({
        //     usernameError: usernameError,
        //     emailError: emailError,
        //     phoneError: phoneError,
        //     passwordError: passwordError,
        //     confirmpasswordError: confirmpasswordError
        // })

        // if (!emailError && !passwordError) {
        //     alert('Successfully!')
        // }

        // let collection = {}
        // collection.email = this.state.email,
        // collection.password = this.state.password,
        // this.state.confirmpassword = this.state.password,
        // collection.confirmpassword = this.state.confirmpassword

        // fetch("", {
        //     method: 'POST',
        //     headers: new Headers({
        //         'Content-type': 'application/json'
        //     }),
        //     body: JSON.stringify(collection)
        // }).then(res => res.json())
        //     .catch(err => console.error('Error', err))
        //     .then(response => console.log('Success', response));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: '#000000',
                    opacity: 0.7,
                    textAlign: 'center',
                    textTransform: "uppercase"
                }}>Sign Up</Text>
                <TextInput
                    placeholder="Username"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor="#002f6c"
                    selectionColor="#fff"
                />
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor="#002f6c"
                    selectionColor="#fff"
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor="#002f6c"
                    selectionColor="#fff"
                />
                <TextInput
                    secureTextEntry
                    placeholder="Confirm Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={confirmpassword => this.setState({ confirmpassword })}
                    value={this.state.confirmpassword}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor="#002f6c"
                    selectionColor="#fff"
                />
                <TouchableOpacity style={styles.button} onPress={this.handleSignup.bind(this)}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("signin")}>
                    <Text style={styles.support}>Already have an account? Signin</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c9ad6'
    },
    textInput: {
        width: '80%',
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: '400',
        color: '#002f6c',
        marginVertical: 5
    },
    button: {
        width: '80%',
        backgroundColor: '#000000',
        opacity: 0.8,
        borderRadius: 25,
        marginVertical: 10,
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
        fontWeight: '600',
        padding: 2,
    }
})