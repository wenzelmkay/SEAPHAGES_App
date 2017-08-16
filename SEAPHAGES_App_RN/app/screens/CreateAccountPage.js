/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Left, Card, Text } from 'native-base';
import { Alert } from 'react-native';
import styles from '../config/styles';
import { NavigationActions, } from 'react-navigation';
import Meteor, { Accounts, createContainer } from 'react-native-meteor';


const backAction = NavigationActions.back({key: null});

const missingInfoAlert = () => {
};

class CreateAccountPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
            passwordConfirm: '',
        };
    }

    createAccount = () => {
        const { name, username, email, password, passwordConfirm } = this.state;

        if (name.length === 0 || email.length === 0 || username.length === 0 || password.length === 0 || password !== passwordConfirm) {
            return (
                Alert.alert(
                    'There is a problem!',
                    'It looks like you are missing some info. Please make sure you have filled all fields!',
                    [
                        {text: 'Okay!', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                ),

                console.log({name, username, email, password, passwordConfirm})
            );
        }

        return Accounts.createUser({ name, username, email, password }, (err) => {
            if (err) {
                console.log("There is a problem!")
            } else {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'signedInStackCall' }),
                    ],
                });
                this.props.navigation.dispatch(resetAction);
            }
        });

    };

    render() {
        return (
            <Container>
                <Header style = {styles.header}>
                        <Button transparent light
                                onPress={() => this.props.navigation.dispatch(backAction)}
                                title='Go back to Sign In Page'>
                            <Icon name='arrow-back' />
                        </Button>
                    <Body>
                    <Title style = {styles.headerTitle}>Create an Account</Title>
                    </Body>
                </Header>

                <Content
                    style = {styles.contentStyle}
                >
                    <Card
                        style={styles.cardStyle}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Full Name</Label>
                                <Input
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input
                                    onChangeText={(username) => this.setState({ username })}
                                    value={this.state.username}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                />
                            </Item>
                            <Item
                                floatingLabel
                                last>
                                <Label>Confirm Password</Label>
                                <Input
                                    secureTextEntry={true}
                                    onChangeText={(passwordConfirm) => this.setState({ passwordConfirm })}
                                    value={this.state.passwordConfirm}/>
                            </Item>
                        </Form>
                      </Card>
                </Content>
                <Button block
                        style= {styles.buttonBlock}
                        onPress={this.createAccount}>
                    <Icon name='ios-key-outline' />
                    <Text>Create Account</Text>
                </Button>
            </Container>
        );
    }

}


export default CreateAccountPage;