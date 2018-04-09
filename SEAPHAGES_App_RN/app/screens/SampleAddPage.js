/**
 * Created by wenzelmk on 5/16/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, CardItem, Text } from 'native-base';
import { goBack, NavigationOptions, NavigationActions } from 'react-navigation';
import Meteor, { createContainer } from 'react-native-meteor';
import { Alert } from 'react-native';
import moment from 'moment';

import styles from '../config/styles';
//import weatherCall from '../api/weatherCall.js'
import fetchWeather from "../components/api.js"

const backAction = NavigationActions.back({
    key: null
    });

class SampleAdd extends Component {
    //lines establish whether or not the modal window is visible, and write a function to make the modal visible (this is called later on lines 172 & 205
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: null,
                longitude: null,
            },
            condition: {
                temperature: null,
                weather: null,
                humidity: null,
            },
            title: '',
            lat: '',
            lng: '',
            temp: '',
            weath: '',
            humid: '',
            date: '',
            description: '',
            phageName: null,
            owner: '',
        };

    };

    handleSubmitSamplePress = () => {


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
                    'Error determining the current weather conditions',
                    'Please make sure the app has permission to access your location and try again.',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
            );
        }

        const newSample = {
            title: this.state.title,
            lat: this.state.latitude,
            lng: this.state.longitude,
            temp: this.state.temperature,
            weath: this.state.weather,
            humid: this.state.humidity,
            date: new Date(),
            description: this.state.description,
            phageName: this.state.phageName,
            owner: this.props.user._id,
        };

        console.log(newSample);

        Meteor.call('Samples.addOne', newSample, (err, res) => {

            if (err) {
                console.log("Sample Addition Failed")
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

    /*weatherGet() {
        weatherCall(this.state.lat, this.state.lng).then((response) => {
            let weatherList = response.list[0]

            // Store nextColor, since we'd like to start next time with it.
            var current = this.state.nextColor;

            // Reset animation
            this.state.val.setValue(0);

            this.setState({
                temperature: weatherList.main.temp,
                city: weatherList.name,
                country: weatherList.sys.country,
                weatherType: weatherList.weather[0].main,
                currentColor: current,
                nextColor: this._randomColor(),
                icon: weatherIcon(weatherList.weather[0].icon)
            });

        });
    };*/

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                );
                fetchWeather(position.coords.latitude, position.coords.longitude).then((response) => {
                    let weatherList = response;
                    this.setState({
                        temperature: weatherList.main.temp,
                        weather: weatherList.weather[0].main,
                        humidity: weatherList.main.humidity
                    });
                });
            },
        );
    }


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
                        <Title style = {styles.headerTitle}>Add Sample</Title>
                    </Body>
                </Header>
                <Content
                    style = {styles.contentStyle}>
                    <Card>
                        <Form>
                            <Item floatingLabel>
                                <Label>Sample Name</Label>
                                <Input
                                    onChangeText={(text) => {this.setState({title: text})}}
                                />
                            </Item>
                            <Item disabled stackedLabel>
                                <Label>Date and Time</Label>
                                <Input disabled placeholder={moment(new Date()).format("MMM Do YYYY, h:mm a")}/>
                            </Item>
                            <Item disabled stackedLabel>
                                <Label>Latitude</Label>
                                <Input disabled placeholder={String(this.state.latitude)} value={String(this.state.latitude)}/>
                            </Item>
                            <Item disabled stackedLabel>
                                <Label>Longitude</Label>
                                <Input disabled placeholder={String(this.state.longitude)} value={String(this.state.longitude)}/>
                            </Item>
                            <Item disabled stackedLabel>
                                <Label>Temperature (C)</Label>
                                <Input disabled placeholder={String(this.state.temperature)} value={String(this.state.temperature)}/>
                            </Item>
                            <Item disabled stackedLabel>
                                <Label>Weather</Label>
                                <Input disabled placeholder={String(this.state.weather)} value={String(this.state.weather)}/>
                            </Item>
                            <Item disabled stackedLabel>
                                <Label>Humidity (%)</Label>
                            <Input disabled placeholder={String(this.state.humidity)} value={String(this.state.humidity)}/>
                        </Item>
                            <Item floatingLabel>
                                <Label>Details</Label>
                                <Input
                                    onChangeText={(text) => {this.setState({description: text})}}
                                />
                            </Item>
                        </Form>
                        <CardItem></CardItem>
                    </Card>
            </Content>
            <Button block style={styles.buttonBlock}
                    onPress = {() => {
                        this.handleSubmitSamplePress()
                    }}>
                <Text>Submit Sample</Text>
                <Icon name='checkmark' />
            </Button>
            </Container>

        );
    }
};

export default createContainer(() => {

    return {
        user: Meteor.user(),
    };
}, SampleAdd);