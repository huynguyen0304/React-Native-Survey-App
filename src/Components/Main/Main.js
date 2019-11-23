import React, { Component } from 'react';
import { 
    Text, StyleSheet, View, TextInput, TouchableOpacity
} from 'react-native';
import getToken from '../../API/getToken';


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: "",
            forms: [],
            key: ""
        }
    }

    componentDidUpdate(prevState) {
        // if(this.state) {
        //     alert("SurveyCode is invalid or not exist !!!");
        // } else {
        //     this.props.navigation.navigate("");
        // }
    }

    componentDidMount() {
        var token = getToken().then(response => response);
        console.log(token);

        fetch("http://104.248.154.180/api/form/", {
            method: 'GET',
            headers:{
                "Accept": 'application/json',
                "Content-type": 'application/json',
                "Authorization": 'Bearer ' + token
            },
            body: JSON.stringify({})
        })
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({
                forms: responseJson
            })
        })
        .catch(err => console.log(err))
    }

    handleEnter() {
        // fetch("", {
        //     method: 'POST',
        //     headers:{
        //         "Accept": 'application/json',
        //         "Content-type": 'application/json'
        //     },
        //     body: JSON.stringify(this.state.code)
        // })
        // .then(res => res.json())
        // .catch(err => console.error(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Enter SurveyCode to entry:</Text>
                <TextInput 
                    style={styles.textinput}
                    value={this.state.code}
                    maxLength={6}
                    onChangeText={(code) => this.setState({code})}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleEnter}>
                    <Text style={styles.buttonText}>Enter</Text>
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
        fontSize: 16,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        padding: "1%"
    },
    buttonText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})
