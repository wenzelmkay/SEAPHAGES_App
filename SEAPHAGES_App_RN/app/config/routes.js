//Created by wenzelmk on 5/15/17.

import React from 'react';

import { TabNavigator, StackNavigator, } from 'react-navigation';
import { Icon } from 'native-base';
import About from '../screens/AboutPage.js';
import Map from '../screens/MapPage.js';
import SampleAdd from '../screens/SampleAddPage.js';
import UserAccount from '../screens/UserAccountPage.js';
import SignIn from '../screens/SignInPage.js';
import CreateAccount from '../screens/CreateAccountPage.js';
import Acknowledgement from '../screens/AcknowledgementScreen.js';
import PrivacyPolicy from '../screens/PrivacyPolicy.js';
import SampleEdit from '../screens/SampleEditPage.js';
import colors from '../config/colors';

export const SignInStack = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In"
        }
    },
    SignUp: {
        screen: CreateAccount,
        navigationOptions: {
            title: "Sign Up"
        }
    },
    createAccountPageCall: {
        screen: CreateAccount,
    },
}, {
    headerMode: 'none',
});

export const AboutStack = StackNavigator({
  About: {
    screen: About,
  },
  acknowledgementCall: {
      screen: Acknowledgement,
      navigationOptions: {
          title: "Credits"
      }
  },
},
{
    headerMode: 'none',
});

export const SampleAddStack = StackNavigator({
    SampleAddPage: {
        screen: SampleAdd,
        navigationOptions: {
            title: 'Add Sample',
        },
    },
}, {
    headerMode: 'none',
});

export const MapStack = StackNavigator({
  Map: {
    screen: Map,
    navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="ios-map" />,
    }
  },
  SampleAdd: {
    screen: SampleAddStack,
  }
},
{
    headerMode: 'none',
});

export const UserAccountStack = StackNavigator({
  UserAccount: {
    screen: UserAccount
  },
  privacyPolicyCall: {
      screen: PrivacyPolicy,
  },
    sampleEditCall: {
        screen: SampleEdit,
        navigationOptions: {
            title: 'Edit Sample',
        },
    },
},
{
    headerMode: 'none',
})

export const Tabs = TabNavigator(
    {
        MapPage: {
            screen: MapStack,
            navigationOptions: {
                tabBarLabel:'Map',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="md-pin" />,
            }
        },
        UserAccountPage: {
            screen: UserAccountStack,
            navigationOptions: {
                tabBarLabel:'User',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="md-person" />,
            }
        },
        About: {
            screen: AboutStack,
            navigationOptions: {
                tabBarLabel: 'About',
                tabBarIcon: <Icon style={[styles.icon, {color: '#ebeeff'}]} name="md-information-circle" />,
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

export const SignedInStack = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
}, {
    headerMode: 'none',
});

export const Root = StackNavigator({
    signInStack: {
      screen: SignInStack,
    },
    createAccountPageCall: {
        screen: CreateAccount,
    },
    signedInStackCall:{
      screen: SignedInStack,
    },
    modalCall: {
        screen: SampleAddStack,
    },
    acknowledgementCall: {
        screen: Acknowledgement,
    },
    privacyPolicyCall: {
        screen: PrivacyPolicy,
    },
}, {
    mode: 'card',
    headerMode: 'none',
});
