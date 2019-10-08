import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableOpacity, ImageBackground 
} from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <ImageBackground  
                source={require("../Asset/welcome.jpg")}
                style={styles.container}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {this.props.navigation.navigate('start')}}>
                    <Text style={styles.text}>
                        Start
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {this.props.navigation.navigate('signin')}}>
                    <Text style={styles.text}>
                        Sign in
                    </Text>
                </TouchableOpacity>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#4f6d7a",

    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textTransform: "capitalize"
    },
    button: {
        backgroundColor: '#426EB4',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 18,
        color: 'white',
        overflow: 'hidden',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 4,
        paddingBottom: 4,
        textAlign:'center',
        marginBottom: 8
    }
})