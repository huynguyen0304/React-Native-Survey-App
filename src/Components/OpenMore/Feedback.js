import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Feedback extends Component {
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
        alignItems: 'center',
        justifyContent: "center"
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
})
