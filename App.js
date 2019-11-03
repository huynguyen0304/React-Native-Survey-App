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
import CreateForm from './src/Components/Main/CreateForm';
import Reports from './src/Components/Main/Reports';


StatusBar.setHidden(true);

const AppNavigator = createStackNavigator({
    home: Home,
    start: Menu,
    surveyHistory: SurveyHistory,
    userProfile: UserProfile,
    contact: Contact,
    instruction: Instruction,
    feedback: Feedback,
    updateProfile: UpdateProfile
});

const AuthNavigator = createStackNavigator({
    signin: Signin,
    signup: Signup,
    forgot: ForgotPassword,
    createform: CreateForm,
    reports: Reports
});

// const AppContainer = createAppContainer(createSwitchNavigator(
//     {
//         AuthLoading: AuthLoadingScreen,
//         App: AppNavigator,
//         Auth: AuthNavigator
//     },
//     {
//         initialRouteName: 'Auth'
//     }
// ));

export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppNavigator,
      Auth: AuthNavigator,
    },
    {
      initialRouteName: 'App',
    }
  ));