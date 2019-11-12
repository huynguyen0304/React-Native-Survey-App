import React from 'react';
import { Text, StyleSheet, View, Image, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from './Main/Main';
import CreateForm from './Main/CreateForm';
import Reports from './Main/Reports';
import More from './Main/More';


export default createMaterialBottomTabNavigator(
    {
        main: { 
            screen: Main,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-home" size={23} color={tintColor} />
                )
            }, 
        },
        create: { 
            screen: CreateForm,
            navigationOptions: {
                tabBarLabel: 'Create',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-add-circle" size={23} color={tintColor} />
                )
            }
        },
        reports: { 
            screen: Reports,
            navigationOptions: {
                tabBarLabel: 'Reports',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-list-box" size={23} color={tintColor} />
                )
            }
        },
        more: { 
            screen: More,
            navigationOptions: {
                tabBarLabel: 'More',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-menu" size={23} color={tintColor} />
                )
            }
        },
    },
    {
        initialRouteName: 'main',
        barStyle: { 
            backgroundColor: '#1c9ad6',
            // borderStyle: "solid",
            // borderTopWidth: 2,
            // borderColor: "#000000"
        }
    },
);

const styles = StyleSheet.create({})
