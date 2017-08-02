/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Left, Text } from 'native-base';
import styles from '../config/styles';
import { AppRegistry } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import SignInPage from '../screens/SignInPage.js';


class CreateAccountPage extends React.Component {
    static navigationOptions = {
        title: 'Create an Account',
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <Container>
                <Header style = {styles.header}>
                        <Button transparent
                                onPress={() => navigate('SignInPage')}
                                title='Go back to Sign In Page'>
                            <Icon name='arrow-back' />
                        </Button>
                    <Body>
                    <Title style = {styles.headerTitle}>Create an Account</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Full Name</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password (again)</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Button block
                        style= {styles.buttonBlock}>
                    <Icon name='ios-key-outline' />
                    <Text style = {styles.buttonText}> Register</Text>
                </Button>
            </Container>
        );
    }

}


export default CreateAccountPage;