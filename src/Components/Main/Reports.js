import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView, FlatList, ActivityIndicator
} from 'react-native';


export default class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: false
        }
    }

    renderItem = ({ item }) => {
        const id = item.id;
        return (
            <View style={styles.rowItem}>
                <TouchableOpacity 
                    onPress={() => {this.props.navigation.navigate("results", {itemid: id}) }}
                >
                    <Text>Title: {item.title}</Text>
                    <Text>Open: {item.created_time}</Text>
                    <Text>Last modified: {item.modified_time}</Text>
                </TouchableOpacity>
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
            });
    }

    render() {
        return (
            this.state.isLoading ? 
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#1c9ad6" animating />
            </View>
            :
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Reports</Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        // keyExtractor={(item, index) => index}
                    />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    rowItem: {
        borderColor: "#000000",
        borderWidth: 2,
        margin: "2%",
        padding: "1%"
    }
})
