/**
 * Created by wenzelmk on 5/16/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, Text } from 'native-base';
import { goBack, NavigationOptions, NavigationActions } from 'react-navigation';
import Meteor from 'react-native-meteor';
import styles from '../config/styles';

const backAction = NavigationActions.back({
    key: null
    });

class SampleAddPage extends Component {
    //lines establish whether or not the modal window is visible, and write a function to make the modal visible (this is called later on lines 172 & 205
    constructor(props) {
        super(props);
        //set the initial region data for the map
        this.state = {
            region: {
                latitude: null,
                longitude: null,
            },
            //newSample : {},
        };
        //console.log(this.state.newSample);

    };

    handleSubmitSamplePress = () => {
        //put form entries into database
        const newSample = {
            title: this.state.title,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            description: this.state.description,
        };

        Meteor.call('FakeSamples.addOne', newSample, (err, res) => {
            console.log('FakeSamples.addOne', err, res);
        });
        //close modal
        this.props.navigation.dispatch(backAction)
        ;
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                );

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
                <Content>
                    <Card
                        style={styles.cardStyle}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Sample Name</Label>
                                <Input
                                    onChangeText={(text) => {this.setState({title: text})}}
                                />
                            </Item>
                            <Item disabled stackedLabel>
                                <Label>Latitude</Label>
                                <Input disabled placeholder={String(this.state.latitude)} value={String(this.state.latitude)}/>
                            </Item>
                            <Item disabled stackedLabel>
                                <Label>Longitude</Label>
                                <Input disabled placeholder={String(this.state.longitude)} value={String(this.state.longitude)}/>
                            </Item>
                            <Item floatingLabel last>
                                <Label>Details</Label>
                                <Input
                                    onChangeText={(text) => {this.setState({description: text})}}
                                />
                            </Item>
                        </Form>

                        <Button block style={styles.buttonBlock}
                                onPress = {() => {
                                    console.log(this.state.title),
                                        console.log(this.state.description),
                                        console.log(this.state.latitude),
                                        console.log(this.state.longitude)
                                    this.handleSubmitSamplePress()
                                }}>

                            <Text>Submit Sample</Text>
                            <Icon name='checkmark' />
                        </Button>
                    </Card>
                </Content>

                <Button block style={styles.buttonBlock}
                        onPress = {() => {
                            console.log(this.state.title),
                            console.log(this.state.description),
                            console.log(this.state.latitude),
                            console.log(this.state.longitude)
                            this.handleSubmitSamplePress()
                        }}>

                    <Text>Submit Sample</Text>
                    <Icon name='checkmark' />
                </Button>
            </Container>

        );
    }
};

export default SampleAddPage
