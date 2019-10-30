import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';


export default class CreateForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSignin: false
        }
    }

    render() {
        const signinJSX = (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Look empty here... Sign in and they'll appear.</Text>
                <View style={styles.rowInfoContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate("signin")}}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate("signup")}}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

        const reportJSX = (
            <View>
                <Text>This ability will be coming soon! </Text>
            </View>
        )

        const indexJSX = this.state.isSignin ? reportJSX : signinJSX;

        return (
            <View style={styles.container}>
                { indexJSX }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: 'center',
        backgroundColor: '#D7D7D7' 
    },
    text: { 
        width: "70%",
        fontWeight: '700',
        fontSize: 16
    },
    rowInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    button: {
        width: '35%',
        backgroundColor: '#1c9ad6',
        marginVertical: "5%",
        paddingVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        margin: "1%"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textTransform: "capitalize",
        paddingHorizontal: 15
    },
})
