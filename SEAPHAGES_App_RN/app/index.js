//Created by wenzelmk on 5/10/17.

import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import SplashScreen from 'react-native-splash-screen';

import { Tabs, SignInStack } from './config/routes';
import Loading from './components/Loading';

import settings from './config/settings';

Meteor.connect(settings.METEOR_URL);

class SEAPHAGES_App_RN extends Component {
    componentDidMount() {
        console.log("meteor.status(): ", this.props.status);
        SplashScreen.hide();
    }

    render() {
      if (this.props.status.connected === false || this.props.loggingIn) {
        return <Loading />;
      } else if (this.props.user !== null) {
        return <Tabs />;
      }
      return <SignInStack />;
    }
}

//export default SEAPHAGES_App_RN;

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, SEAPHAGES_App_RN);
