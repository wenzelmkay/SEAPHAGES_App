//Created by wenzelmk on 5/15/17.

import React from 'react';

import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import HomePage from '../screens/HomePage.js';
import MapPage from '../screens/MapPage.js';
import SampleAddPage from '../screens/SampleAddPage.js';
import DetailScreen from '../screens/DetailScreen.js';

export const Tabs = TabNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel:'Home',
            tabBarIcon: <Icon name="pizza" size={35} />,
        }
    },
    MapPage: {
        screen: MapPage,
        navigationOptions: {
            tabBarLabel:'Map',
            tabBarIcon: <Icon ios="ios-beaker" android="md-pint" size={35} />,
        }
    },
    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: {
            tabBarLabel:'Test',
            tabBarIcon: <Icon ios="ios-happy" android="md-happy" size={35} />,
        }
    },
});

export const SampleAddStack = StackNavigator({
    SampleAddPage: {
        screen: SampleAddPage,
        navigationOptions: {
            title: 'Add Sample',
        },
    },
});

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    Settings: {
        screen: SampleAddStack,
    },
}, {
    mode: 'modal',
    headerMode: 'none',
});



