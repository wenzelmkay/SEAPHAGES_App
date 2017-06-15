//Created by wenzelmk on 5/10/17.


import React, {Component} from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import { Root } from './config/routes';
import settings from './config/settings';

Meteor.connect(settings.METEOR_URL);

class SEAPHAGES_App_RN extends Component {


    render() {
        return ( <Root />
        );
    }
}


export default SEAPHAGES_App_RN;