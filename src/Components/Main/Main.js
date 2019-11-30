import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList
} from 'react-native';
import Modal from "react-native-modal";
import getToken from '../../API/getToken';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveykey: "",
            forms: [],
            isModalVisible: false
        };
        this.onPress = this.openModal.bind(this);
        this.onPress = this.handleEnter;
    }

    componentDidUpdate() {
        // console.log(this.state.forms)
    }

    renderItem = ({ item }) => {
        const id = item.id;
        return (
            <View style={styles.rowItem}>
                <TouchableOpacity
                    onPress={this.openModal.bind(this, id)}
                >
                    <Text>Title: {item.title}</Text>
                    <Text>Description: {item.description}</Text>
                    <Text>Open: {item.created_time}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    componentDidMount = async () => {
        var token = await getToken().then(response => response);

        await fetch("http://104.248.154.180/api/form/", {
            method: 'GET',
            headers: {
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

    openModal(id, handleEnter) {
        this.setState({ isModalVisible: true });
        const forms = this.state.forms.find(x => x.id === id);
        const key = forms.key;
        this.handleEnter = () => {
            if (id) {
                if (this.state.surveykey !== key) {
                    alert("This Survey key is not exist or invalid. Please try again !");
                } else {
                    this.props.navigation.navigate("evaluation", {id, key});
                    this.setState({ 
                        isModalVisible: false,
                        surveykey: !this.state.surveykey
                    })
                }
            }
        };
    }

    // handleEnter = (id) => {
    //     const forms = this.state.forms.find(x => x);
    //     const key = forms.key;
    //     console.log(id);
    //     // if (id) {
    //     //     if (this.state.surveykey !== key) {
    //     //         alert("This Survey key is not exist or invalid. Please try again !");
    //     //     } else {
    //     //         // this.props.navigation.navigate("evaluation", (id, key));
    //     //         alert("alooo");
    //     //     }
    //     // }
    // }

    closeModal = () => {
        this.setState({ isModalVisible: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Home</Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.forms}
                        renderItem={this.renderItem}
                    // keyExtractor={(item, index) => index}
                    />
                </View>
                <Modal
                    isVisible={this.state.isModalVisible}
                    style={styles.modalcontainer}>
                    <Text style={styles.text}>Enter SurveyKey to entry:</Text>
                    <TextInput
                        style={styles.textinput}
                        value={this.state.surveykey}
                        maxLength={15}
                        onChangeText={(surveykey) => this.setState({ surveykey })}
                    />
                    <TouchableOpacity style={styles.buttonEnter} onPress={this.handleEnter}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancel} onPress={this.closeModal}>
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
    rowItem: {
        borderColor: "#000000",
        borderWidth: 2,
        margin: "2%",
        padding: "1%"
    },
    modalcontainer: {
        position: "absolute",
        marginTop: "40%",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 3,
        borderRadius: 12,
        borderColor: "#000000",
        backgroundColor: "#fff",
        opacity: 0.8
    },
    text: {
        marginTop: "3%",
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        padding: "1%",
        marginHorizontal: "10%",
    },
    textinput: {
        width: '80%',
        backgroundColor: '#fff',
        // borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#000000',
        marginVertical: 5,
        textAlign: "center",
        textTransform: "none",
        marginHorizontal: "10%"
    },
    buttonEnter: {
        width: '40%',
        backgroundColor: '#1c9ad6',
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 2,
        marginVertical: "2%",
        paddingVertical: "3%"
    },
    buttonCancel: {
        width: '40%',
        backgroundColor: '#CC0000',
        borderRadius: 10,
        borderColor: "#000000",
        borderWidth: 2,
        marginVertical: "1%",
        paddingVertical: "3%",
    },
    buttonText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        // textTransform: 'uppercase'
    }
})
