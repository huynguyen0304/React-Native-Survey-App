import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Signout extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleSignout() {
        const { username, password } = this.state;
        this.setState(this.props.username == null, this.props.password == null)
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.rowInfoContainer2} onPress={this.handleSignout}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    }
})
