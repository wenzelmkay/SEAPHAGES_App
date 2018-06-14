/**
 * Created by wenzelmk on 10/18/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, CardItem, Text, ListItem, CheckBox } from 'native-base';
import { goBack, NavigationOptions, NavigationActions } from 'react-navigation';
import Meteor, { createContainer } from 'react-native-meteor';
import { Alert } from 'react-native';
import moment from 'moment';

import styles from '../config/styles';



const backAction = NavigationActions.back({
    key: null
});

class SampleEdit extends Component {

    constructor(props) {
        super(props);
        const { sampleDetails } = this.props.navigation.state.params;
        this.state = {
            _id: sampleDetails._id,
            title: sampleDetails.title,
            lat: sampleDetails.lat,
            lng: sampleDetails.lng,
            temp: sampleDetails.temp,
            weath: sampleDetails.weath,
            humid: sampleDetails.humid,
            date: sampleDetails.date,
            description: sampleDetails.description,
            phageName: sampleDetails.phageName,
            owner: sampleDetails.owner,
        }
        //this.onRegionChange = this.onRegionChange.bind(this);
    };

    handleSubmitChangesPress = () => {

        const updatedSample = {
            _id: this.state._id,
            title: this.state.title,
            lat: Number(this.state.lat),
            lng: Number(this.state.lng),
            temp: this.state.temp,
            weath: this.state.weath,
            humid: this.state.humid,
            date: this.state.date,
            description: this.state.description,
            phageName: this.state.phageName,
            //owner: this.props.user._id,
        };


        if (this.state.title.length === 0 || this.state.description.length === 0) {
            return (
                Alert.alert(
                    'Error adding sample',
                    'It looks like you are missing some info. Please make sure you have filled all fields.',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            );
        }

        if (this.state.latitude === 0 || this.state.longitude === 0) {
            return (
                Alert.alert(
                    'Error determining your location',
                    'Please make sure the app has permission to access your location and try again.',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            );
        }

        if (this.state.temperature === 0 || this.state.weather === 0 || this.state.humidity === 0) {
            return (
                Alert.alert(
                    'Error determining the weather conditions',
                    'Please make sure the app has permission to access your location and try again.',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            );
        }

        Meteor.call('Samples.updateOne', updatedSample, (err, res) => {

            if (err) {
                console.log("Sample Update Failed")
                return (
                    Alert.alert(
                        'Your sample was not added.',
                        err.reason,
                        [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        { cancelable: false }
                    )
                )
            } else {
                this.props.navigation.dispatch(backAction);
            }
        });
    };

    handleRemoveSamplePress = () => {
        const remove_id = {
            _id: this.state._id
        };
        Meteor.call('Samples.removeOne', remove_id, (err, res) => {

            if (err) {
                console.log("Sample Remove Failed")
                return (
                    Alert.alert(
                        'Your sample was not removed.',
                        err.reason,
                        [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        { cancelable: false }
                    )
                )
            } else {
                this.props.navigation.dispatch(backAction);
            }
        })
    };

    yesPhage = () => {

    };

    noPhage = () => {
    };

    checkBoxRender = () => {
        if (this.state.phageName != null) {
            return (
                <ListItem onPress = {() => {
                    this.noPhage()
                }}>
                    <CheckBox checked= {true} />
                        <Body>
                            <Text>Phage found in sample</Text>
                        </Body>
                </ListItem>
            );
        }
        return (
            <ListItem onPress = {() => {
                    this.yesPhage()
                }}>
                    <CheckBox checked={true} />
                        <Body>
                            <Text>Phage found in sample</Text>
                        </Body>
            </ListItem>
        );
    };

    render() {
        return (
            <Container>
                <Header style = {styles.header}>
                    <Button transparent light
                            onPress={() => this.props.navigation.dispatch(backAction)}
                            title='Go back to Map Page'>
                        <Icon name='arrow-back' />
                    </Button>
                    <Body>
                    <Title style = {styles.headerTitle}>Edit Sample</Title>
                    </Body>
                </Header>
                <Content
                    style = {styles.contentStyle}>
                    <Card>
                        <Form>
                            <Item stackedLabel>
                                <Label>Edit Sample</Label>
                                <Input
                                    placeholder= {this.state.title}
                                    onChangeText={(text) => {this.setState({title: text})}}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label>Date and Time</Label>
                                <Input
                                    placeholder={moment(this.state.date).format("MMM Do YYYY, h:mm a")}
                                    onChangeText={(text) => {this.setState({date: text})}}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Latitude</Label>
                                <Input
                                    placeholder={String(this.state.lat)}
                                    onChangeText={(text) => {this.setState({lat: text})}}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Longitude</Label>
                                <Input
                                    placeholder={String(this.state.lng)}
                                    onChangeText={(text) => {this.setState({lng: text})}}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Temperature (C)</Label>
                                <Input
                                    placeholder={String(this.state.temp)}
                                    onChangeText={(text) => {this.setState({temp: text})}}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Weather</Label>
                                <Input
                                    placeholder={String(this.state.weath)}
                                    onChangeText={(text) => {this.setState({weath: text})}}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Humidity (%)</Label>
                                <Input
                                    placeholder={String(this.state.humid)}
                                    onChangeText={(text) => {this.setState({humid: text})}}/>
                            </Item>
                            <Item stackedLabel>
                                <Label>Details</Label>
                                <Input
                                    placeholder={this.state.description}
                                    onChangeText={(text) => {this.setState({description: text})}}
                                />
                            </Item>
                        </Form>
                        {this.checkBoxRender()}
                    </Card>
                </Content>
                <Button block style={styles.buttonBlock}
                        onPress = {() => {
                            this.handleSubmitChangesPress()
                        }}>
                    <Text>Submit Changes</Text>
                    <Icon name='checkmark' />
                </Button>
                <Button
                    transparent
                    onPress={() =>  this.handleRemoveSamplePress()}>
                    <Text style={styles.cardPrimaryText}>Delete Sample</Text>
                </Button>
            </Container>
        );
    }
};

//export default SampleEdit;

export default createContainer(() => {
    return {
        user: Meteor.user(),
    };
}, SampleEdit);