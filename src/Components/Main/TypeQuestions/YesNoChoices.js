import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity,
    ScrollView, Image, TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';

class SingleAnswereChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            id: props.key
        }
    }

    render() {
        return (
            <View style={styles.rowCheckbox}
            // key={this.state.choice}
            >
                <CheckBox
                    checkedIcon='check-square-o'
                    uncheckedIcon='square-o'
                    checked={this.state.checked}
                    onIconPress={() => {
                        this.setState({ checked: !this.state.checked }
                        )
                    }
                    }
                />

                <TextInput
                    value={this.state.choice}
                    placeholder="Choice text"
                    style={styles.choiceText}
                // onChangeText={(choice) => this.setState({ choice })}
                // onKeyPress={this.handleAdd}
                />

                <Icon
                    name="ios-close"
                    style={styles.iconremove}
                    onPress={this.props.handleRemove()}
                />
            </View>
        );
    }
}
export default class YesNoChoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            choice: 1,
            // AnswerChoice: [
            //     {
            //         id: 1,
            //         Answere: "",
            //         Checked: false
            //     }
            // ]
        };
    }
    componentDidMount() {
        // this.setState(prevState => ({
        //     AnswerChoice: [...prevState.AnswerChoice, newElement]
        // }))
    }
    handleRemove = () => {
        if (this.state.choice > 1) {
            this.setState({ choice: this.state.choice - 1 });
        }
    };

    handleAdd = () => {
        this.setState({ choice: this.state.choice + 1 });
    }

    handleSave = () => {
        this.props.navigation.navigate("createform", {
            question: this.state.question,
            choice: this.state.choice
        });
    }

    render() {
        const AnswerChoice = () => {
            let AnswerChoiceArray = [];
            for (let index = 0; index < this.state.choice; index++) {
                AnswerChoiceArray.push(
                    <SingleAnswereChoice key={index}
                        handleRemove={() => this.handleRemove}
                    />
                );
            }
            return AnswerChoiceArray
            // return this.state.AnswerChoice.map(Answere=>{
            //     return 
            // });
        };
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Create Yes/No Choices</Text>
                        </View>

                        <View style={styles.form}>
                            <View>
                                <TextInput
                                    placeholder="Question title ?"
                                    style={styles.questionText}
                                />
                                <AnswerChoice />
                            </View>

                            <TouchableOpacity style={styles.rowContainer} onPress={() => { this.handleAdd() }}>
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