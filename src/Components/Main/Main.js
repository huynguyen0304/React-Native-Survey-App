import React, { Component } from 'react';
import { 
    Text, StyleSheet, View, TextInput, TouchableOpacity, Head 
} from 'react-native';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: ''
        }
    }

    handleEnter() {
        // let collection = {}
        // collection.code = this.state.code;

        // fetch("", {
        //     method: 'GET',
        //     headers: new Headers({
        //         'Content-type': 'application/json'
        //     }),
        //     body: JSON.stringify(collection)
        // })
        // .then(res => res.json())
        // .then(this.props.navigation.navigate("survey"))
        // .catch(err => console.error('Error', err))
        // .then(response => console.log('Success', response));

        // this.props.navigation.navigate("survey");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textinput}
                    placeholder="SURVEY CODE"
                    value={this.state.code}
                    maxLength={6}
                    onChangeText={(code) => this.setState({code})}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleEnter.bind(this)}>
                    <Text style={styles.text}>Enter</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#D7D7D7'
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
        paddingVertical: 12,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        textTransform: "uppercase"
    }
})
