import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity,
    ScrollView, Image, TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import HeaderBar from './../Header';


export default class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueArray: [],
            disabled: false
        };
        this.addNewElement = false;
        this.index = 0;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={scrollView => this.scrollView = scrollView}
                >
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Create your Survey</Text>
                        </View>

                        <View style={styles.form}>
                            <TextInput
                                style={styles.titleText}
                                placeholder="SURVEY TITLE"
                                value={this.state.title}
                                maxLength={50}
                                underlineColorAndroid='transparent'
                                placeholderTextColor="white"
                                selectionColor="#000000"
                                onChangeText={(title) => { this.setState({ title }) }}
                            />
                            <TextInput
                                style={styles.discriptionText}
                                placeholder="Discription"
                                maxLength={100}
                                underlineColorAndroid='transparent'
                                placeholderTextColor="white"
                                value={this.state.discription}
                                onChangeText={(discription) => { this.setState({ discription }) }}
                            />
                        </View>

                        <View style={styles.form}>
                            <View>
                                <TextInput
                                    placeholder="Question title ?"
                                    style={styles.questionText}
                                />
                                <View>
                                    <View style={styles.rowCheckbox}>
                                        <CheckBox
                                            checkedIcon='check-square-o'
                                            uncheckedIcon='square-o'
                                            checked={this.state.checked}
                                        />

                                        <TextInput
                                            placeholder="Choice text"
                                            style={styles.choiceText}
                                        />
                                    </View>

                                    <TouchableOpacity style={styles.rowContainer}>
                                        <Icon style={styles.icon} name="ios-add-circle-outline" />
                                        <Text>Add more choice</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.rowAddQuestion}>
                            <Icon style={styles.icon} name="ios-add-circle-outline" />
                            <Text>Add more Question</Text>
                        </TouchableOpacity>
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
        height: "100%",
        marginTop: "0.5%",
        borderRadius: 5,
        shadowColor: '#3B5458',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2
    },
    titleText: {
        backgroundColor: "#EEEEEE",
        width: "60%",
        height: "40%",
        marginVertical: "1%",
        marginBottom: "3%",
        borderRadius: 10
    },
    discriptionText: {
        backgroundColor: "#EEEEEE",
        height: "30%",
        marginVertical: "1%",
        borderRadius: 10
    },
    questionText: {
        backgroundColor: "#EEEEEE",
        width: "88%",
        marginVertical: "1%",
        borderRadius: 10
    },
    icon: {
        fontSize: 25
    },
    choiceText: {
        paddingVertical: 5,
        backgroundColor: "#EEEEEE",
        width: "78%",
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
        justifyContent: "center",
        width: "100%",
        paddingVertical: "2%",
    }
})
