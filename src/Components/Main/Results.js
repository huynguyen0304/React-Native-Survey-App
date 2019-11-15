import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import question from '../../API/question';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            id_question: "",
            question: [],
            answers: [],
            results: [],
            isLoading: true
        }
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.title}</Text>
                {/* <PieChart
                    data="{results}"
                    width="{screenWidth}"
                    height="{220}"
                    chartConfig="{chartConfig}"
                    backgroundColor="transparent"
                    paddingLeft="15"
                /> */}
            </View>
        )
    }

    componentDidMount() {
        fetch("http://my-json-server.typicode.com/huynguyen0304/Survey/db")
            .then((res) => res.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.form,
                    isLoading: false
                })
            })
    }

    render() {
        const itemid = JSON.stringify(this.props.navigation.getParam("itemid", "alooo"))
        var list = [] = this.state.dataSource.map(x => x.id);
        const result = this.state.isLoading ?
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#1c9ad6" animating />
            </View>
            :
            <View>
                <Text>{itemid}</Text>
            </View>;

        const error = <View><Text>Nothing here!</Text></View>;

        let indexJSX;

        for (var i = 0; i <= list.length; i++) {
            if (itemid === list[i]) {
                indexJSX = result;
            }
            else indexJSX = error;
        }

        return (
            <View>
                {indexJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({})
