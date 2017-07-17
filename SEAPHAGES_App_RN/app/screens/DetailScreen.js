import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';

import settings from '../config/settings';

Meteor.connect(settings.METEOR_URL);

const DetailScreen = ({ fakes }) => {
    return (
        <View style={styles.container}>
            {fakes.map((item) => {
                return <Text>{item._id}, {item.sampleName}, {item.latitude}, {item.longitude}</Text>
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        padding: 10,
        backgroundColor: '#c5c5c5',
    },
});


export default createContainer(() => {
    //Meteor.subscribe('testdb');
    Meteor.subscribe('fakeSamples');

    return {
        //testing: Meteor.collection('testdb').find(),
        fakes: Meteor.collection('fakeSamples').find(),
    };
}, DetailScreen);