import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';


export default class CreateForm extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>This ability will be coming soon! </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
