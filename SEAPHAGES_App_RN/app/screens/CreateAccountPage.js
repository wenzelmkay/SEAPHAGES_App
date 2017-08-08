/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Left, Text } from 'native-base';
import styles from '../config/styles';
import { NavigationActions } from 'react-navigation';


const backAction = NavigationActions.back({key: null});

class CreateAccountPage extends Component {
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
                    <Text>Register</Text>
                </Button>
            </Container>
        );
    }

}


export default CreateAccountPage;