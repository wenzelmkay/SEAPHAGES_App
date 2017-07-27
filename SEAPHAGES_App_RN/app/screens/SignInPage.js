/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';

class SignInPage extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Sign In</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button block rounded>
                        <Text>Sign In</Text>
                    </Button>
                    <Body>
                        <Text>Don't have an account?</Text>
                    </Body>
                    <Button style={styles.createanaccountbutton} transparent>
                        <Text>Register</Text>
                    </Button>
                </Content>


            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
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
    signinbutton: {
        margin: 0,
        position: 'absolute',
        top:220,
        left:125,
    },
    createanaccountbutton: {
        position: 'absolute',
        top: 320,
        left: 100,
    }
});

export default SignInPage;