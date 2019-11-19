import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';



export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            results: [],
            isLoading: true
        }
    }

    data = ({ item }) => {
        return (
            <View>
                <Text>{item.answer}</Text>
            </View>
        )
    }

    value = ({ item }) => {
        return (
            <View>
                <Text>{item.value}</Text>
            </View>
        )
    }

    renderItem = ({ item }) => {
        if (item.type_questions === "multiple") {
            return (
                <View style={styles.rowItem}>
                    <View style={styles.rowQuestion}>
                        <Text>{item.title}</Text>
                        <FlatList
                            data={item.answers}
                            renderItem={this.data}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.rowReport}>
                        <Text>a</Text>
                    </View>
                </View>
            )
        } else if (item.type_questions === "yes/no") {
            return (
                <View style={styles.rowItem}>
                    <View style={styles.rowQuestion}>
                        <Text>{item.title}</Text>
                        <FlatList
                            data={item.answers}
                            renderItem={this.data}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.rowReport}>
                        <Text>a</Text>
                    </View>
                </View>
            )
        } else if (item.type_questions === "vote") {
            return (
                <View style={styles.rowItem}>
                    <View style={styles.rowQuestion}>
                        <Text>{item.title}</Text>
                        <FlatList
                            data={item.answers}
                            renderItem={this.data}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.rowReport}>
                        <Text>a</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <View style={styles.rowQuestion}>
                        <Text>{item.title}</Text>
                        <FlatList
                            data={this.state.results}
                            renderItem={this.value}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            )
        }
    }

    componentDidMount() {
        const itemid = JSON.stringify(this.props.navigation.getParam("itemid", "alooo"));

        fetch("http://my-json-server.typicode.com/huynguyen0304/Survey/form/" + itemid)
            .then((res) => res.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.questions,
                    isLoading: false
                })
            });

        fetch("http://my-json-server.typicode.com/huynguyen0304/Survey/evaluation/?form=" + itemid)
            .then((res) => res.json())
            .then((responseJson) => {
                this.setState({
                    results: responseJson.results,
                    isLoading: false
                })
            });
    }

    render() {
        const itemid = JSON.stringify(this.props.navigation.getParam("itemid", "alooo"));
        var list = this.state.dataSource.filter(x => x.id === itemid);
        const result = this.state.isLoading ?
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#1c9ad6" animating />
            </View>
            :
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Results</Text>
                </View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>;

        const error = <View><Text>Nothing here!</Text></View>;

        let indexJSX;

        if (list) {
            indexJSX = result;
        }
        else indexJSX = error;

        return (
            <View>
                {indexJSX}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowItem: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    rowQuestion: {
        borderColor: "#000000",
        borderWidth: 2,
        margin: "2%",
        padding: "1%",
        width: "40%"
    },
    rowReport: {
        borderColor: "#000000",
        borderWidth: 2,
        margin: "2%",
        padding: "1%"
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
})
