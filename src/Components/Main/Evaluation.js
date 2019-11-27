import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>{JSON.stringify(navigation.getParam("id"))}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
