import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity,
    ScrollView, TextInput, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import getToken from '../../API/getToken';


export default class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            discription: ""
        };
    }

    handleSubmit = async () => {
        if (this.state.title !== ""){
            var token = await getToken().then(response => response);
            fetch("hhttp://104.248.154.180/api/form/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    "Authorization": 'Bearer ' + token
                },
                body: JSON.stringify({
                    title: this.state.title,
                    discription: this.state.discription
                })
            })
            .then(response => console.log(response.json()))
        } else {
            alert("Nothing to Submit");
        }
    }

    renderQuestions = (item) => {
        const questions = [];
        const question = JSON.stringify(this.props.navigation.getParam("question", "Nothing here, click Add Question below"));
        questions.push(question);
        return (
            <View style={styles.form}>
                <Text>{item}</Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Create your Survey</Text>
                    </View>

                    <View style={styles.form}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "600"
                        }}>Survey title:</Text>
                        <TextInput
                            style={styles.titleText}
                            value={this.state.title}
                            maxLength={100}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#000000"
                            onChangeText={(title) => { this.setState({ title }) }}
                        />

                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500"
                        }}>Discription:</Text>
                        <TextInput
                            style={styles.discriptionText}
                            maxLength={1000}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#000000"
                            value={this.state.discription}
                            onChangeText={(discription) => { this.setState({ discription }) }}
                        />
                    </View>

                    <View>
                        <FlatList
                            data={this.state.questions}
                            renderItem={this.renderQuestions}
                        />
                    </View>

                    <TouchableOpacity style={styles.rowAddQuestion} onPress={() => { this.props.navigation.navigate("menutochoose") }}>
                        <Icon style={styles.icon} name="ios-add-circle-outline" />
                        <Text style={{ paddingVertical: "3%" }}>Add Question</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={this.handleSubmit} style={styles.buttonText}>
                        <Text style={{
                            paddingVertical: "3%",
                            alignSelf: "center",
                            fontSize: 18,
                            fontWeight: "700"
                        }}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    text: {
        width: "70%",
        fontWeight: '700',
        fontSize: 16
    },
    rowInfoContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
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

    form: {
        padding: 7,
        flex: 1,
        backgroundColor: '#D7D7D7',
        margin: "2%",
        marginTop: "0.5%",
        borderRadius: 5,
        shadowColor: '#3B5458',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2
    },
    titleText: {
        backgroundColor: "#EEEEEE",
        width: "70%",
        height: "20%",
        marginVertical: "1%",
        marginBottom: "3%",
        marginHorizontal: "3%",
        borderColor: "#000000",
        borderWidth: 1
    },
    discriptionText: {
        backgroundColor: "#EEEEEE",
        height: "30%",
        marginVertical: "1%",
        marginHorizontal: "3%",
        borderColor: "#000000",
        borderWidth: 1
    },
    icon: {
        fontSize: 25,
        paddingVertical: "3%"
    },

    rowAddQuestion: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "#D7D7D7",
        width: "40%",
        height: "10%",
        margin: "2%",
        paddingHorizontal: "4%",
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 10,
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: "#1c9ad6",
        width: "30%",
        paddingHorizontal: 15,
        paddingVertical: "2%",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: "2%",
        borderWidth: 2,
        borderColor: "#000000",
    }
})
