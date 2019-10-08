import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Components/Home';
import Signin from './src/Components/Signin/Signin';
import Signup from './src/Components/Signup/Signup';
import Menu from './src/Components/Menu';
import ForgotPassword from './src/Components/Signin/ForgotPassword';
import SurveyScreen from './src/Components/Main/SurveyScreen';

import Contact from './src/Components/OpenMore/Contact';
import Feedback from './src/Components/OpenMore/Feedback';
import Instruction from './src/Components/OpenMore/Instruction';
import SurveyHistory from './src/Components/OpenMore/SurveyHistory';
import UserProfile from './src/Components/OpenMore/UserProfile';


StatusBar.setHidden(true);

const AppNavigator = createStackNavigator({
    home: Home,
    signin: Signin,
    signup: Signup,
    forgot: ForgotPassword,
    start: Menu,
    survey: SurveyScreen,
    contact: Contact,
    feedback: Feedback,
    instruction: Instruction,
    surveyHistory: SurveyHistory,
    userProfile: UserProfile
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}