/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';
import styles from '../config/styles';



class SignInPage extends Component {
    handleOpenModalPress = () => {
        this.props.navigation.navigate('CreateAccountPageCall');
    };

    render() {
        return (
            <Container>
                <Header style = {styles.header}>
                    <Body>
                    <Title style = {styles.headerTitle}>Sign In</Title>
                    </Body>
                </Header >
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
                    <Button block
                            style= {styles.buttonBlock}>
                        <Icon name='ios-key-outline' />
                        <Text>Sign In</Text>
                    </Button>
                    <Button block
                            onPress={() =>  this.handleOpenModalPress() + console.log('PRESSED')}
                            title="Go to Create Account Page"
                            style= {styles.buttonBlock}>
                        <Icon name='ios-person-add-outline' />
                        <Text>Create an Account</Text>
                    </Button>
                </Content>
            </Container>

        );
    }
}




export default SignInPage;