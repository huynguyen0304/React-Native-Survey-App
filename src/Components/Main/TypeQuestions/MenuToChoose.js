import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity,
    ScrollView, TextInput
} from 'react-native';


export default class MenuToChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            discription: "",
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Choose type Questions</Text>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("multiplechoices") }}>
                        <Text style={styles.text}>Multiple Choices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("textchoices") }}>
                        <Text style={styles.text}>Text Choices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("yesnochoices") }}>
                        <Text style={styles.text}>YesNo Choices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("votechoices") }}>
                        <Text style={styles.text}>Vote Choices</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: '#D7D7D7'
    },
    header: {
        backgroundColor: '#1c9ad6',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: "3%"
    },
    headerTitle: {
        fontFamily: 'Avenir',
        color: '#fff', fontSize: 30,
        marginLeft: '3%',
        fontWeight: 'bold'
    },
    wrapper: {
        marginTop: "10%",
        alignItems: "center"
    },
    textinput: {
        width: '40%',
        backgroundColor: 'white', 
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        paddingHorizontal: 16,
        fontSize: 14,
        color: 'black',
        marginVertical: 5,
        textAlign: "center",
        textTransform: "uppercase"
    },
    button: {
        width: '40%',
        backgroundColor: '#1c9ad6',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        marginVertical: 10,
        paddingVertical: 12
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textTransform: "uppercase"
    }
})