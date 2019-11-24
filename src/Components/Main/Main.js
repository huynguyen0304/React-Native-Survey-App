import React, { Component } from 'react';
import { 
    Text, StyleSheet, View, TextInput, TouchableOpacity
} from 'react-native';
import Modal from "react-native-modal";
import getToken from '../../API/getToken';


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: "",
            forms: [],
            key: "",
            isModalVisible: false
        }
    }

    componentDidUpdate() {
        // if(this.state) {
        //     alert("SurveyCode is invalid or not exist !!!");
        // } else {
        //     this.props.navigation.navigate("");
        // }
        console.log(this.state.forms)
    }

    componentDidMount = async () => {
        var token = await getToken().then(response => response);
        console.log(token);

        await fetch("http://104.248.154.180/api/form/", {
            method: 'GET',
            headers:{
                "Accept": 'application/json',
                "Content-type": 'application/json',
                "Authorization": 'Bearer ' + token
            },
            body: JSON.stringify()
        })
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({
                forms: responseJson
            })
        })
        .catch(err => console.log(err))
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
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
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Home</Text>
                </View>
                <Modal isVisible={this.state.isModalVisible} style={styles.modalcontainer}>
                    <Text style={styles.text}>Enter SurveyCode to entry:</Text>
                    <TextInput 
                        style={styles.textinput}
                        value={this.state.code}
                        maxLength={6}
                        onChangeText={(code) => this.setState({code})}
                    />
                    <TouchableOpacity style={styles.buttonEnter} onPress={this.handleEnter}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancel} onPress={this.toggleModal}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#1c9ad6',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: "5%"
    },
    headerTitle: {
        fontFamily: 'Avenir',
        color: '#fff', fontSize: 30,
        marginLeft: '3%',
        fontWeight: 'bold'
    },
    modalcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        padding: "1%"
    },
    textinput: {
        width: '80%',
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
    buttonEnter: {
        width: '40%',
        backgroundColor: '#1c9ad6',
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 2,
        marginVertical: 10,
        paddingVertical: 12,
    },
    buttonCancel: {
        width: '40%',
        backgroundColor: '#CC0000',
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 2,
        marginVertical: 10,
        paddingVertical: 12,
    },
    buttonText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        // textTransform: 'uppercase'
    }
})
