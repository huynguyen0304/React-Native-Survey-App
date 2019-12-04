import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity,
    ScrollView, TextInput, KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';


export default class MultipleChoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    id: Date.now(),
                    question: "",
                    isRight: false
                }
            ],
            question: "",
            questionTitle: "",
            isRight: false
        };
    }

    findIndex = (arr, id) => {
        let result = -1;
        arr.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });
        return result;
    }

    handleRemove = (id) => {
        const { questions } = this.state;
        let index = this.findIndex(questions, id);
        questions.splice(index, 1);
        this.setState({
            ...this.state.questions
        })
    };

    handleAdd = () => {
        const newItem = {
            question: this.state.question,
            isRight: this.state.isRight,
            id: Date.now()
        };
        this.setState(state => ({
            questions: state.questions.concat(newItem)
        }));
    };

    handleChange = (value, index) => {
        const newArray = [...this.state.questions];
        newArray[index].question = value;
        this.setState({ questions: newArray });
    };

    handleSave = () => {
        this.props.navigation.navigate("createform", {
            question: this.state.questionTitle,
            choice: this.state.questions
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Create Multiple Choices</Text>
                        </View>

                        <View style={styles.form}>
                            <KeyboardAvoidingView
                                behavior={Platform.OS === "ios" ? "padding" : null}
                                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: "600"
                                }}>Question title:</Text>
                                <TextInput
                                    style={styles.questionText}
                                    value={this.state.questionTitle}
                                    onChangeText={(questionTitle) => this.setState({ questionTitle })}
                                />
                                {this.state.questions.map((item, key) => {
                                    return <View style={styles.rowCheckbox}
                                        key={key}
                                    >
                                        <CheckBox
                                            name="isChecked"
                                            checked={item.isChecked}
                                            onChange={this.handleChange}
                                        />

                                        <TextInput
                                            name="question"
                                            value={item.question}
                                            placeholder="Your choice"
                                            style={styles.choiceText}
                                            onChangeText={(value) => this.handleChange(value, key)}
                                        />
                                        <Icon
                                            name="ios-close"
                                            style={styles.iconremove}
                                            onPress={() => this.handleRemove(item.id)}
                                        />
                                    </View>
                                })}
                            </KeyboardAvoidingView>

                            <TouchableOpacity style={styles.rowContainer} onPress={this.handleAdd}>
                                <Icon style={styles.icon} name="ios-add-circle-outline" />
                                <Text style={{
                                    paddingVertical: "3%"
                                }}>Add more choice</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={this.handleSave} style={styles.buttonText}>
                                <Text style={{
                                    paddingVertical: "3%",
                                    alignSelf: "center",
                                    fontSize: 18,
                                    fontWeight: "700"
                                }}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
        paddingVertical: "3%"
    },
    headerTitle: {
        fontFamily: 'Avenir',
        color: '#fff', fontSize: 30,
        marginLeft: '3%',
        fontWeight: 'bold'
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

    form: {
        padding: 7,
        flex: 1,
        backgroundColor: '#D7D7D7',
        margin: "2%",
        height: "100%",
        marginTop: "0.5%",
        borderRadius: 5,
        shadowColor: '#3B5458',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2
    },

    questionText: {
        backgroundColor: "#EEEEEE",
        width: "88%",
        marginVertical: "1%",
        borderRadius: 10
    },
    iconremove: {
        fontSize: 37,
        width: "8%"
    },
    icon: {
        fontSize: 25
    },
    choiceText: {
        paddingVertical: 5,
        backgroundColor: "#EEEEEE",
        width: "65%",
        height: "70%",
        borderRadius: 10,
        alignSelf: "center"
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "#1c9ad6",
        width: "47%",
        paddingVertical: "2%",
        paddingHorizontal: "4%",
        marginTop: "3%",
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 10
    },
    rowAddQuestion: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "#D7D7D7",
        width: "47%",
        height: "8%",
        alignItems: "center",
        margin: "2%",
        paddingHorizontal: "4%",
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 10
    },
    rowCheckbox: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: "1%",
        alignItems: "center"
    }
})