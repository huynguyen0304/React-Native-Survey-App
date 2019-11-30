import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import getToken from '../../API/getToken';


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

    componentDidMount = async () => {
        const itemid = JSON.stringify(this.props.navigation.getParam("itemid", "alooo"));
        const key = JSON.parse(JSON.stringify(this.props.navigation.getParam("key", "alooo")));
        var token = await getToken().then(response => response);

        fetch("http://104.248.154.180/api/form/" + itemid + "/" + "?key=" + key, {
            method: 'GET',
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json',
                "Authorization": 'Bearer ' + token
            },
            body: JSON.stringify()
        })
            .then((res) => { return res.json()})
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                    isLoading: false
                })
            });
    }

    render() {
        const itemid = JSON.stringify(this.props.navigation.getParam("itemid", "alooo"));
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
                    data={this.state.dataSource.questions}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>;

        const error = <View><Text>Nothing here!</Text></View>;

        let indexJSX;

        if (itemid) {
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
