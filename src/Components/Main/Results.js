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
            questions: [],
            answers: [],
            results: [],
            isLoading: true
        }
    }

    renderItem = ({ item }) => {
        const questions = this.state.dataSource.map((item, index) => {
            return item.questions//.map((item, index) => {
            //return item.title;
            //});
        });
        const questionTile = questions.map((items, index) => {
            return items.map(item => item.title)
        });
        // alert(...questionTile);

        /**
         * const list = this.state.data.map((item, index) => {
              return item.questions.map((item, index) => {
                return <h1 key={index}>{item.title}</h1>;
              });
            });
         */

        return (
            <View style={styles.rowItem}>
                <Text>{questionTile}</Text>
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
        var list = this.state.dataSource.filter(x => x.id === itemid);
        const result = this.state.isLoading ?
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#1c9ad6" animating />
            </View>
            :
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowItem: {
        borderColor: "#000000",
        borderWidth: 2,
        margin: "2%",
        padding: "1%"
    }
})
