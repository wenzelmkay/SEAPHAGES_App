//Created by wenzelmk on 5/15/17.

import React from 'react';

import { TabNavigator, StackNavigator, } from 'react-navigation';
import { Icon } from 'native-base';
import HomePage from '../screens/HomePage.js';
import MapPage from '../screens/MapPage.js';
import SampleAddPage from '../screens/SampleAddPage.js';
import UserAccountPage from '../screens/UserAccountPage.js';
import SignInPage from '../screens/SignInPage.js';
import CreateAccountPage from '../screens/CreateAccountPage.js';
import colors from '../config/colors';


export const SignInStack = StackNavigator({
    SignIn: {
        screen: SignInPage,
        navigationOptions: {
            title: "Sign In"
        }
    },
    SignUp: {
        screen: CreateAccountPage,
        navigationOptions: {
            title: "Sign Up"
        }
    },
    }, {
        headerMode: 'none',
    });


export const Tabs = TabNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="home" size={35}/>,
            }
        },
        MapPage: {
            screen: MapPage,
            navigationOptions: {
                tabBarLabel:'Map',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="pin" size={35} />,
            }
        },
        UserAccountPage: {
            screen: UserAccountPage,
            navigationOptions: {
                tabBarLabel:'User',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="person" size={35} />,
            }
        },
        },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: colors.textWhite,
            inactiveTintColor: colors.textLight,
            activeBackgroundColor: colors.darkPrimary,
            style: {
                backgroundColor: colors.primary,
            },
            showIcon: true,
        }
    },
);

export const SignedInStack = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
}, {
    headerMode: 'none',
});

export const SampleAddStack = StackNavigator({
    SampleAddPage: {
        screen: SampleAddPage,
        navigationOptions: {
            title: 'Add Sample',
        },
    },
}, {
    headerMode: 'none',
});

export const Root = StackNavigator({
    signInStack: {
      screen: SignInStack,
    },
    createAccountPageCall: {
        screen: CreateAccountPage,
    },
    signedInStackCall:{
      screen: SignedInStack,
    },
    modalCall: {
        screen: SampleAddStack,
    },
}, {
    mode: 'card',
    headerMode: 'none',
});











