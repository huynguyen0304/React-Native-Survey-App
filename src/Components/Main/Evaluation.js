import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import getToken from '../../API/getToken';

export default class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            dataSource: [],
            idQuestion: "",
            value: ""
        };
    }

    componentDidUpdate() {
        // console.log(this.state.forms);
        // console.log(this.state.dataSource);
    }

    componentDidMount = async () => {
        const id = JSON.stringify(this.props.navigation.getParam("id", "Nothing here !"));
        const key = JSON.parse(JSON.stringify(this.props.navigation.getParam("key", "Nothing here !")));
        var token = await getToken().then(response => response);

        await fetch("http://104.248.154.180/api/form/" + id + "/?key=" + key, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    forms: responseJson,
                    dataSource: responseJson.questions
                })
            })
    }

    questionItem = (item) => {
        return (
            <View style={styles.rowQuestion}>
                <Text>{item.title}</Text>
            </View>
        )
    }

    handleSend = () => {
        const id = JSON.stringify(this.props.navigation.getParam("id", "Nothing here !"));
        const answer = [];
        const results = [
            answer,
            this.state.idQuestion,
            this.state.value
        ];

        fetch("http://104.248.154.180/api/evaluation/" , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                // 'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                form: id,
                submitted_time: "",
                results: results
            })
        })
        .then(response => response.json())
    }

    render() {
        const title = this.state.forms.title;
        const description = this.state.forms.description;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Evaluation</Text>
                </View>
                <View style={styles.form}>
                    <Text style={{
                        fontSize: 23,
                        fontWeight: "700"
                    }}>{title}</Text>
                    <Text style={{
                        fontSize: 15
                    }}>{description}</Text>
                </View>
                <View style={styles.form}>
                    <FlatList 
                        data={this.state.dataSource}
                        renderItem={this.questionItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={this.handleSend} style={styles.buttonText}>
                        <Text style={{
                            paddingVertical: "3%",
                            alignSelf: "center",
                            fontSize: 18,
                            fontWeight: "700"
                        }}>SEND</Text>
                    </TouchableOpacity>
                </View>
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
    form: {
        padding: 7,
        backgroundColor: '#D7D7D7',
        margin: "2%",
        marginTop: "1%",
        borderRadius: 5,
        shadowColor: '#3B5458',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2
    },
    rowQuestion: {
        margin: "2%",
        padding: "1%",
        width: "100%"
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: "#1c9ad6",
        width: "25%",
        paddingHorizontal: 15,
        paddingVertical: "2%",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: "2%",
        borderWidth: 2,
        borderColor: "#000000",
    },
})
