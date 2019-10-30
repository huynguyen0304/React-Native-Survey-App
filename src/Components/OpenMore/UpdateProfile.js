import React, { Component } from 'react'
import { 
    Text, StyleSheet, View, TouchableOpacity, TextInput
} from 'react-native'

export default class UpdateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtName: '',
            txtAddress: '',
            txtPhone: ''
        }
    }

    render() {

        return (
            <View style={style.wrapper}>
                <View style={style.body}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Update Profile</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    body: { flex: 10, backgroundColor: '#D7D7D7' },
    header: { 
        backgroundColor: '#1c9ad6', 
        alignItems: 'center', 
        flexDirection: 'row', 
        paddingHorizontal: 10,
        paddingVertical: "3%" 
    },
    headerTitle: { 
        fontFamily: 'Avenir', 
        color: '#fff', fontSize: 40, 
        marginLeft: '3%', 
        fontWeight: 'bold' 
    },
})
