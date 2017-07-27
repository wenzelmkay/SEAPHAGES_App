/**
 * Created by wenzelmk on 7/17/17.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Left } from 'native-base';

class CreateAccountPage extends Component {
    render() {
        return (
            <Container>
                <Header>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    <Body>
                    <Title>Create an Account</Title>
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
                    <Button icon rounded>
                        <Icon name='ios-key-outline' />
                        <Text>Register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

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
});

export default CreateAccountPage;