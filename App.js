import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Components/Home';
import Signin from './src/Components/Signin/Signin';
import Signup from './src/Components/Signup/Signup';
import Menu from './src/Components/Menu';
import ForgotPassword from './src/Components/Signin/ForgotPassword';

import Contact from './src/Components/OpenMore/Contact';
import Feedback from './src/Components/OpenMore/Feedback';
import Instruction from './src/Components/OpenMore/Instruction';
import SurveyHistory from './src/Components/OpenMore/SurveyHistory';
import UserProfile from './src/Components/OpenMore/UserProfile';
import UpdateProfile from './src/Components/OpenMore/UpdateProfile';
import AuthLoadingScreen from './src/Components/AuthLoadingScreen';


StatusBar.setHidden(true);

const AppNavigator = iSigned => {
    return  createStackNavigator({
    home: Home,
    start: Menu,
    feedback: Feedback,
    surveyHistory: SurveyHistory,
    userProfile: UserProfile,
    updateProfile: UpdateProfile
})
};

const AuthNavigator = createStackNavigator({
    signin: Signin,
    signup: Signup,
    forgot: ForgotPassword,
    instruction: Instruction,
    contact: Contact,
});

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'AuthLoading'
    }
));
export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

/*
export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'App'
    }
))
*/