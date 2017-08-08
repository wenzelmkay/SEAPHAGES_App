//Created by wenzelmk on 5/15/17.

import React from 'react';

import { TabNavigator, StackNavigator, } from 'react-navigation';
import { Icon } from 'native-base';
import HomePage from '../screens/HomePage.js';
import MapPage from '../screens/MapPage.js';
import SampleAddPage from '../screens/SampleAddPage.js';
import UserAccountPage from '../screens/UserAccountPage.js';
import DetailScreen from '../screens/DetailScreen.js';
import SplashPage from '../screens/SplashPage.js';
import SignInPage from '../screens/SignInPage.js';
import CreateAccountPage from '../screens/CreateAccountPage.js';
import colors from '../config/colors';



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
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="globe" size={35} />,
            }
        },
        UserAccountPage: {
            screen: UserAccountPage,
            navigationOptions: {
                tabBarLabel:'User',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="settings" size={35} />,
            }
        },
        SignInPage: {
            screen: SignInPage,
            navigationOptions: {
                tabBarLabel:'Sign In',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="person" size={35} />,
            }
        },

        /*DetailScreen: {
            screen: DetailScreen,
            navigationOptions: {
                tabBarLabel:'Test',
                tabBarIcon: <Icon ios="ios-happy" android="md-happy" size={35} />,
            }
        },*/
        /*SplashPage: {
            screen: SplashPage,
            navigationOptions: {
                tabBarLabel:'Splash',
                tabBarIcon: <Icon name="pizza" size={35} />,
            }
        },*/
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


export const SignInStack = StackNavigator({
    CreateAccountPage: {
        screen: CreateAccountPage,
    },
}, {
    headerMode: 'none',
});


export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    modalCall: {
        screen: SampleAddStack,
    },
    createAccountPageCall: {
        screen: SignInStack,
    },
}, {
    mode: 'card',
    headerMode: 'none',
});











