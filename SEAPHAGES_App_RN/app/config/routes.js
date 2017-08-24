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
import AcknowledgementScreen from '../screens/AcknowledgementScreen.js';
import colors from '../config/colors';


export const Tabs = TabNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="ios-home" />,
            }
        },
        MapPage: {
            screen: MapPage,
            navigationOptions: {
                tabBarLabel:'Map',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="ios-pin" />,
            }
        },
        UserAccountPage: {
            screen: UserAccountPage,
            navigationOptions: {
                tabBarLabel:'User',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="ios-person" />,
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
                height: 65,
            },
            showIcon: true,
        }
    },
);

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

export const SignedInStack = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    signInStack: {
        screen: SignInStack,
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
    acknowledgementCall: {
        screen: AcknowledgementScreen,
    },
}, {
    mode: 'card',
    headerMode: 'none',
});











