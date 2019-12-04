import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity,
    ScrollView, Image, TextInput, KeyboardAvoidingView
} from 'react-native';


export default class TextChoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            text: ""
        };
    }

    handleSave = () => {
        this.props.navigation.navigate("createform", {
            question: this.state.question,
            choice: this.state.choice
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Create Text Choices</Text>
                        </View>

                        <View style={styles.form}>
                            <KeyboardAvoidingView
                                behavior={Platform.OS === "ios" ? "padding" : null}
                                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: "700"
                                }}>Question title:</Text>
                                <TextInput
                                    style={styles.questionText}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: "700",
                                    paddingTop: "4%"
                                }}>Choice text:</Text>
                                <TextInput
                                    placeholder="You can't text here !"
                                    value={this.state.text}
                                    style={styles.choiceText}
                                    editable={false}
                                />
                            </KeyboardAvoidingView>
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
        marginVertical: "0.5%",
        borderRadius: 5,
        shadowColor: '#3B5458',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2
    },
    questionText: {
        backgroundColor: "#EEEEEE",
        width: "78%",
        marginVertical: "1%",
        borderRadius: 10
    },
    icon: {
        fontSize: 25
    },
    choiceText: {
        backgroundColor: "#EEEEEE",
        width: "100%",
        marginVertical: "1%",
        borderRadius: 10
    },
})