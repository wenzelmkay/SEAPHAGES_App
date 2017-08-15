/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import Image from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, CardItem, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from '../config/styles';
import Meteor from 'react-native-meteor';



const backAction = NavigationActions.back({key: null});

class UserAccountPage extends Component {

    handleSignOutPress = () => {
        Meteor.logout(() => {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'signInStack' }),
                ],
            });
            this.props.navigation.dispatch(resetAction);
        });
    };

    render() {
        return (
            <Container>
                <Header style = {styles.header}>
                    <Button transparent light
                            onPress={() => this.props.navigation.dispatch(backAction)}
                            title='Go Back'>
                        <Icon name='arrow-back' />
                    </Button>
                    <Body>
                    <Title style = {styles.headerTitle}>Account Settings</Title>
                    </Body>
                </Header>
                <Content style = {styles.contentStyle}>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text> Name </Text>
                            <Text> Username </Text>
                            <Text> E-mail </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text> Samples </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
                <Button block
                        style={styles.buttonBlock}
                        onPress={this.handleSignOutPress}>
                    <Text>Sign Out</Text>
                </Button>
            </Container>



        );
    }
}


export default UserAccountPage;