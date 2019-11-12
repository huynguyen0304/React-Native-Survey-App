import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Results extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: []
        }
    }

    renderItem = () => {}

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/huynguyen0304/Survey/evaluation")
            .then((res) => res.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.form
                })
            })
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
