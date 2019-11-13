import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import question from '../../API/question';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            question: [],
            answers: [],
            results: [],
            isLoading: true
        }
    }

    renderItem = ({ item }) => {
        if (JSON.stringify(navigation.getParam("item.created_by")) === item.form) {
            return (
                <View></View>
            )
        }
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/huynguyen0304/Survey/db")
            .then((res) => res.json())
            .then((responseJson) => {
                this.setState({
                    results: responseJson.evaluation,
                    isLoading: false
                })
            });
    }

    render() {
        return (
            this.state.isLoading ?
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="#1c9ad6" animating />
                </View>
                :
                <View>
                </View>
        )
    }
}

const styles = StyleSheet.create({})
