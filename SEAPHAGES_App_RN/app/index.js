//Created by wenzelmk on 5/10/17.

import React, { Component } from 'react';
import Meteor from 'react-native-meteor';
import SplashScreen from 'react-native-splash-screen';

import { Root } from './config/routes';
import settings from './config/settings';

Meteor.connect(settings.METEOR_URL);

class SEAPHAGES_App_RN extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return ( <Root />
        );
    }
}

export default SEAPHAGES_App_RN;
