//importing different pages
import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import { Button } from 'native-base';
import styles from '../config/styles';
import colors from '../config/colors';

class HomePage extends Component {
    handleAcknowledgementPress = () => {
        this.props.navigation.navigate('acknowledgementCall');
    };
    render () {
        return (
            <View style = {{padding: 50, paddingTop: 200}}>

                <Image
                    style={{height: 50, padding: 30,}}
                    source={{uri: 'https://seaphages.org/static/images/SEAPHAGES_Logo.png'}}
                />

                <Text style = {{fontSize: 20, paddingTop: 40, color: colors.textDark, textAlign: 'center'}}>
                    A mobile tool for in-the-field collection of soil sample data.
                </Text>
                <Button
                    transparent
                    onPress={() =>  this.handleAcknowledgementPress()}>
                    <Text>Learn more about the App Team!</Text>
                </Button>

            </View>
        );
    }
}

export default HomePage