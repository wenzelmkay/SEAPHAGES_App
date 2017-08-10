/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, Text } from 'native-base';
import styles from '../config/styles';



class SignInPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usernameOrEmail: '',
            password: '',
        };
    }

    handleCreateAccountPress = () => {
        this.props.navigation.navigate('createAccountPageCall');
    };

    handleSignInPress = () => {
      this.props.navigation.navigate('signedInStackCall');
    };

    render() {
        return (
            <Container>
                <Header style = {styles.header}>
                    <Body>
                    <Title style = {styles.headerTitle}>Sign In</Title>
                    </Body>
                </Header >
<<<<<<< HEAD
                <Content>
                    <Card
                        style={styles.cardStyle}>
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
                        </Content>
                        <Button
                            icon
                            block
                            style = {styles.buttonBlock}>
                            <Icon name='ios-key-outline' />
                            <Text>Sign In</Text>
                        </Button>
                        <Button
                            icon
                            block
                            bordered
                            style = {styles.buttonBordered}
                            onPress={() =>  this.handleCreateAccountPress() + console.log('PRESSED')}>
                            <Icon style = {styles.buttonBorderedText} name='ios-person-add-outline' />
                            <Text style = {styles.buttonBorderedText}>Create an Account</Text>
                        </Button>
=======

                <Content style = {styles.contentStyle}>
                    <Card
                        style={styles.cardStyle}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username or Email</Label>
                            <Input
                                onChangeText={(usernameOrEmail) => this.setState({ usernameOrEmail })}
                                value={this.state.usernameOrEmail}/>
                        </Item>
                        <Item floatingLabel
                              last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true}
                                   onChangeText={(password) => this.setState({ password })}
                                   value={this.state.password}
                            />
                        </Item>
                    </Form>
              
                    <Button
                        icon
                        block
                        style = {styles.buttonBlock}
                        onPress={() =>  this.handleSignInPress()}>
                        <Icon name='ios-key-outline' />
                        <Text>Sign In</Text>
                    </Button>
                    <Button
                        icon
                        block
                        bordered
                        style = {styles.buttonBordered}
                        onPress={() =>  this.handleCreateAccountPress()}>
                        <Icon style = {styles.buttonBorderedText} name='ios-person-add-outline' />
                        <Text style = {styles.buttonBorderedText}>Create an Account</Text>
                    </Button>
>>>>>>> wenzelmk/master
                    </Card>
                </Content>
            </Container>

        );
    }
}




export default SignInPage;