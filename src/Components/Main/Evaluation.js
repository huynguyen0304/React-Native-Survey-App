import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import getToken from '../../API/getToken';

export default class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            answer: [],
            idQuestion: [],
            value: "",
            activeCheckboxIndex: -1, //luc khoi tao thi vi tri la -1
            indexAnswer: -1
        };
    }

    componentDidUpdate() {}

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
            .then((response) => { return response.json() })
            .then((responseJson) => {
                this.setState({
                    forms: responseJson
                })
            })
    }

    handleChange = (item, index) => {
        this.setState({
            activeCheckboxIndex: index,
            indexAnswer: index
        })
        
        console.log("State " , this.state.activeCheckboxIndex)
        console.log("Press ",index);
        console.log("idAnswer", this.state.indexAnswer)
    }

    data = ({ item, index }) => {
        console.log("Index: ", index);
        console.log(item.id);

        return (
            <View style={{ flexDirection: "row", width: "70%" }}>
                <CheckBox
                    checkedIcon={<Icon name="ios-radio-button-on" size={23} />}
                    uncheckedIcon={<Icon name="ios-radio-button-off" size={23} />}
                    onPress={()=>{this.handleChange(item.id, index)}}
                    checked={(this.state.activeCheckboxIndex===index && this.state.indexAnswer===item.id)?true:false} //neu no băng index cua cai checkbox hien tai thì set lại thành true, không thì bằng false
                />
                <Text style={styles.answerText}>{item.answer}</Text>
            </View>
        )
    }

    value = ({ item }) => {
        return (
            <View>
                <Text style={styles.answerText}>{item.value}</Text>
            </View>
        )
    }

    _keyExtractor = (item, index) => item.id;

    questionItem = ({ item }) => {
        if (item.type_questions === "multiple") {
            return (
                <View style={styles.form}>
                    <View>
                        <Text style={styles.questionText}>{item.title}</Text>
                        <View>
                            <FlatList
                                data={item.answers}
                                renderItem={this.data}
                                extraData={this.state.indexAnswer}
                                keyExtractor={this._keyExtractor}
                            />
                        </View>
                    </View>
                </View>
            )
        } else if (item.type_questions === "yes/no") {
            return (
                <View style={styles.form}>
                    <View>
                        <Text style={styles.questionText}>{item.title}</Text>
                        <FlatList
                            data={item.answers}
                            renderItem={this.data}
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </View>
            )
        } else if (item.type_questions === "vote") {
            return (
                <View style={styles.form}>
                    <View>
                        <Text style={styles.questionText}>{item.title}</Text>
                        <FlatList
                            data={item.answers}
                            renderItem={this.data}
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.form}>
                    <KeyboardAvoidingView>
                        <Text style={styles.questionText}>{item.title}</Text>
                        <TextInput style={styles.inputBox}
                            onChangeText={(value) => this.setState({ value })}
                            placeholder="Your answer: "
                            selectionColor="#fff"
                            value={this.state.value}
                        />
                    </KeyboardAvoidingView>
                </View>
            )
        }
    }

    handleSend = () => {
        const id = JSON.stringify(this.props.navigation.getParam("id", "Nothing here !"));
        const answer = [];
        const results = [
            answer,
            this.state.idQuestion,
            this.state.value
        ];

        fetch("http://104.248.154.180/api/evaluation/", {
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
            <ScrollView style={styles.container}>
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
                <View>
                    <FlatList
                        data={this.state.forms.questions}
                        renderItem={this.questionItem}
                        keyExtractor={this._keyExtractor}
                        extraData={this.state}
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
    buttonText: {
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: "#1c9ad6",
        width: "25%",
        paddingHorizontal: 15,
        paddingVertical: "2%",
        borderRadius: 10,
        alignSelf: "center",
        marginVertical: "3%",
        borderWidth: 2,
        borderColor: "#000000",
    },
    questionText: {
        fontSize: 16,
        fontWeight: "500",
        paddingBottom: "2%"
    },
    answerText: {
        fontSize: 14,
        padding: "7%"
    },
    inputBox: {
        width: '80%',
        padding: "2%",
        fontSize: 15,
        color: '#000000',
        borderBottomWidth: 2,
        borderColor: "#898989"
    },
})
